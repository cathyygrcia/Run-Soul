import { useEffect, useState } from 'react';
import { type Product } from '../lib';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
};

export function Catalog({ text }: Props) {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch('/api/products');
        if (!resp.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await resp.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error Loading Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  return (
    <div className="container">
      <h1>{text}</h1>
      <hr />
      <div className="row">
        {products?.map((product) => (
          <div key={product.productId} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};
function ProductCard({ product }: CardProps) {
  const { name, price, brand, imageUrl, productId } = product;
  return (
    <Link
      to={`/details/${productId}`}
      className="product text-dark card mb-4 shadow-sm text-decoration-none">
      {/* TODO: Instead of a div, the above should link to `/details/:productId` */}

      <div className="justify-center items-center">
        <div className="display flex justify-center items-center">
          <img src={imageUrl} />
        </div>
        <h1>{brand}</h1>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </Link>
  );
}
