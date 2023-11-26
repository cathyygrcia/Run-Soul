export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  details: string;
  brand: string;
  size: number[];
  categoryId: number;
};

export type Image = {
  productId: number;
  imageUrl: string;
};

/**
 * Fetches all products from the API.
 * @returns Promise that resolves to an array of products.
 */
export async function fetchCatalog(): Promise<Product[]> {
  const res = await fetch('/api/products');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Fetches a single product from the API.
 * @param {number} productId The ID of the product to fetch.
 * @returns Promise that resolves to the product.
 */
export async function fetchProduct(productId: number): Promise<Product> {
  const res = await fetch(`/api/productdetails/${productId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  const product = await res.json();
  product.size = JSON.parse(product.size);
  return product;
}

export async function fetchImages(productId: number): Promise<Image[]> {
  const res = await fetch(`/api/productimages/${productId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
