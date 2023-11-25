import { useEffect, useState } from 'react';
import { fetchProduct, type Product } from '../lib';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';

export function ProductDetails() {
  // TODO: Retrieve productId from the route

  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await fetchProduct(productId);
        setProduct(product);
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
  if (!product) return null;
  const { name, imageUrl, price, brand } = product;
  return (
    <>
      <Link to="/">
        {/* TODO: Instead of a div, the above should link to `/` */}
        <button className="back-button white"> &lt; Back</button>
      </Link>
      <div className="flex justify-center">
        <div className="image-container">
          <div className="images-row flex">
            <div className="">
              <div className="product-img"></div>
              <div className="product-img"></div>
              <div className="product-img"></div>
            </div>
          </div>
          <div className="images-row flex flex-col items-center">
            <div className="hero flex justify-center items-center">
              <img src={imageUrl} />
            </div>
            <button className="cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="details-container">
          <div className="details-header flex justify-center">
            <h1 className="text-6xl white">
              {brand} {name}
            </h1>
          </div>
          <p className="mt-5 text-2xl mb-8 white">${price}</p>
          <div className="sizes">
            <div className="size-box"></div>
            <div className="size-box"></div>
            <div className="size-box"></div>
            <div className="size-box"></div>
          </div>
          <div className="sizes">
            <div className="size-box"></div>
            <div className="size-box"></div>
            <div className="size-box"></div>
            <div className="size-box"></div>
          </div>
        </div>
      </div>
      <Footer product={product} />
    </>
  );
}
