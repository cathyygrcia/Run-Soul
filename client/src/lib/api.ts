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
  imagesId: number;
};

export type CartItem = {
  cartId: number;
  quantity: number;
  size: number;
  productId: number;
};

export type CartProduct = Product & CartItem;

export const categoryNames = {
  1: 'Mens',
  2: 'Womens',
  3: 'Kids',
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

export async function fetchCart(): Promise<CartProduct[]> {
  const res = await fetch('/api/cart');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

//fetch call for addToCart to server
export async function addToCart(productId: number, size: number) {
  const requestBody = JSON.stringify({ productId, size, quantity: 1 });

  const res = await fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  });

  if (!res.ok) {
    throw new Error(`fetch Error ${res.status}`);
  }

  return await res.json();
}

export async function removeFromCart(cartId: number): Promise<void> {
  const req = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(`/api/cart/${cartId}`, req);

  if (!res.ok) {
    throw new Error(`Fetch Error ${res.status}`);
  }
}

export async function removeAll(cartId: number): Promise<void> {
  const req = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch(`/api/cart/all/${cartId}`, req);

  if (!res.ok) {
    throw new Error(`Fetch Error ${res.status}`);
  }
  return await res.json();
}

export async function updateCart(
  cartId: number,
  quantity: number
): Promise<CartItem> {
  const req = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ quantity }),
  };
  const res = await fetch(`/api/cart/${cartId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
