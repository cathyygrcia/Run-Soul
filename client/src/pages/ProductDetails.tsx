import { useEffect, useState } from 'react';
import { Image, fetchProduct, type Product, fetchImages } from '../lib';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';

export function ProductDetails() {
  // TODO: Retrieve productId from the route

  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [images, setImages] = useState<Image[]>();

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
      <Link to="/">
        {/* TODO: Instead of a div, the above should link to `/` */}
        <button className="back-button white"> &lt; Back</button>
      </Link>
      <div className="flex justify-center items-center">
        <div className="image-container">
          <div className="images-row">
            <div className="flex flex-col items-center justify-center">
              {images.map((image) => (
                <img src={image.imageUrl} className="product-img" />
              ))}
            </div>
          </div>
          <div className="images-row flex flex-col items-center">
            <div className="hero flex justify-center items-center">
              <img src={imageUrl} />
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
            {product.size.map((size) => (
              <div className="size-box">{size}</div>
            ))}
          </div>
          <button className="cart-button white">Add to Cart</button>
        </div>
      </div>
      <Footer product={product} />
    </>
  );
}
