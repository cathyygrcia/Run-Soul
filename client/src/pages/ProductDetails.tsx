import { useEffect, useState } from 'react';
import {
  Image,
  fetchProduct,
  type Product,
  fetchImages,
  addToCart,
  fetchCart,
} from '../lib';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

type Props = {
  onAdd: (quantity: number) => void;
};

export function ProductDetails({ onAdd }: Props) {
  // TODO: Retrieve productId from the route

  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [images, setImages] = useState<Image[]>();
  const [size, setSize] = useState<number>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handlePhotoClick(index) {
    setCurrentImageIndex(index);
  }

  function renderPhotos() {
    return images?.map((image, index) => (
      <div className="product-img hover:transform hover:scale-95 transition-transform duration-300 ease-out-in">
        <img
          key={image.imagesId}
          src={image.imageUrl}
          alt={`Mini ${index}`}
          onMouseOver={() => handlePhotoClick(index)}
        />
      </div>
    ));
  }

  async function handleAddToCart() {
    try {
      const data = await fetchCart();

      let quantity = 0;
      for (let i = 0; i < data.length; i++) {
        quantity += data[i].quantity;
      }

      setIsLoading(true);
      if (productId && size) {
        //addToCart
        await addToCart(+productId, size);
        onAdd(quantity + 1);
      }
    } catch (err) {
      alert(`Select a size: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await fetchProduct(productId);
        const images = await fetchImages(productId);

        setProduct(product);
        setImages(images);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId]);

  if (isLoading)
    return (
      <div className="loading">
        <h1 className="white text-4xl">Loading....</h1>
      </div>
    );
  if (error)
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  if (!product || !images) return null;
  const { name, imageUrl, price, brand } = product;

  return (
    <>
      {/* TODO: Instead of a div, the above should link to `/` */}
      <div className="back-button white"></div>

      <div className="product-details-container">
        <div className="image-container">
          <div className="images-row">
            <div className="mini-images ">{renderPhotos()}</div>
          </div>
          <div className="images-row flex flex-col items-center">
            <div className="hero flex justify-center items-center">
              <img src={images?.[currentImageIndex]?.imageUrl || imageUrl} />
            </div>
          </div>
        </div>
        <div className="details-container">
          <div className="details-header flex justify-center">
            <h1 className="text-6xl white">
              {brand} {name}
            </h1>
          </div>
          <p className="mt-5 text-2xl mb-8 white">${price}</p>
          <div className="select">
            <p className="white">Select size: </p>
          </div>
          <div className="sizes">
            {product.size.map((s) => (
              <div
                onClick={() => setSize(s)}
                className={`size-box ${s === size ? 'highlight' : ''}`}
                key={s}>
                {s}
              </div>
            ))}
          </div>
          <button
            onClick={handleAddToCart}
            className="cart-button white"
            onChange={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <Footer product={product} />
    </>
  );
}
