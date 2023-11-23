import { useEffect, useState } from 'react';
import { type Product } from '../lib';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
  categoryId?: number;
  search: string;
  featured?: boolean;
};

export function Catalog({ text, categoryId, search, featured }: Props) {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  console.log('search:', search);
  useEffect(() => {
    async function fetchData() {
      const url = featured ? '/api/featured' : `/api/products/${categoryId}`;
      try {
        const resp = await fetch(url);
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
  }, [categoryId, featured]);

  if (isLoading || !products) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error Loading Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  const categoryProducts = products.filter(
    (product) => product.categoryId === categoryId
  );
  const displayProducts = categoryProducts.filter((product) =>
    product.brand.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <div className="container">
      <h1>{text}</h1>
      <hr />
      <div className="row">
        {displayProducts?.map((product) => (
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
export function ProductCard({ product }: CardProps) {
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
