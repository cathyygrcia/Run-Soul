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
    <div className="justify-center items-center">
      <div className="display flex justify-center items-center">
        <img src={imageUrl} />
      </div>
      <h1>{brand}</h1>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{details}</p>
    </div>
  );
}
