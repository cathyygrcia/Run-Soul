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
    <div className="shoe-container ">
      <h1 className="ml-20 text-4xl white">{text}</h1>
      <div className="flex flex-wrap justify-center">
        {displayProducts?.map((product) => (
          <div key={product.productId} className="">
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
    <Link to={`/details/${productId}`} className="">
      {/* TODO: Instead of a div, the above should link to `/details/:productId` */}

      <div className="flex flex-col items-center ml-16 ">
        <div className="display flex justify-center items-center hover:transform hover:scale-95 transition-transform duration-300 ease-in-out">
          <img src={imageUrl} />
        </div>
        <h1 className="mt-3 white">{brand}</h1>
        <h3 className="white">{name}</h3>
        <p className="mb-3 white">${price}</p>
      </div>
    </Link>
  );
}
