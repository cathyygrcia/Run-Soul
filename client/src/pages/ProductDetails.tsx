import { useEffect, useState } from 'react';
import { fetchProduct, type Product } from '../lib';
import { useParams } from 'react-router-dom';

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

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  if (!product) return null;
  const { name, imageUrl, price, brand, details } = product;
  return (
    <>
      <div className="flex">
        <div className="image-container">
          <div className="images-row flex">
            <div className="">
              <div className="product-img"></div>
              <div className="product-img"></div>
              <div className="product-img"></div>
            </div>
          </div>
          <div className="images-row">
            <div className="hero flex justify-center items-center">
              <img src={imageUrl} />
            </div>
          </div>
        </div>
        <div className="details-container">
          <div className="details-header flex justify-center">
            <h1 className="text-6xl">
              {brand} {name}
            </h1>
          </div>
          <p className="mt-5 text-2xl mb-8">${price}</p>
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

          <div className="details-info">
            <p className="text-2xl">
              The Rundown:
              <br />
            </p>
            <p> {details}</p>
          </div>
        </div>
      </div>
    </>
  );
}
