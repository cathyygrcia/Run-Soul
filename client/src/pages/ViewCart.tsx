import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartProduct } from '../lib';

export function ViewCart() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [cart, setCart] = useState<CartProduct[]>();

  useEffect(() => {
    async function fetchCart() {
      const url = '/api/cart';
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await resp.json();
        setCart(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCart();
  }, []);
  if (isLoading || !cart)
    return (
      <div className="loading">
        <h1 className="white text-4xl">Loading....</h1>
      </div>
    );
  if (error)
    return (
      <div>
        Error Loading Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );

  return (
    <>
      <div className="blue">
        <h1 className="ml-20 text-4xl white p-5">Your Cart</h1>
      </div>

      <div className="cart-container">
        <div className="cart-row">
          <div className=" white info">
            <p>Product</p>
          </div>

          <div className="white info">
            <p>Quantity</p>
          </div>
          <div className="white info">
            <p>Total</p>
          </div>
        </div>
        <div>
          <div className="cart-row">
            <div className=" white info">
              {cart?.map((product) => (
                <div key={product.productId}>
                  <CartCard cartProduct={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="checkout-row justify-end">
          <Link to="/checkout">
            <div>
              <button className="checkout-button">Checkout</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
type CardProps = {
  cartProduct: CartProduct;
};

export function CartCard({ cartProduct }: CardProps) {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  function handleAdd() {
    setQuantity(quantity + 1);
  }
  function handleMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  function handleRemove() {
    setQuantity(0);
  }

  const { productId, size, name, price } = cartProduct;
  return (
    <div className="cart-row">
      <div className=" white info">
        <p>{productId}</p>
        <p>{size}</p>
        <p>{name}</p>
      </div>

      <div className="white info">
        <Quantity
          quantity={quantity}
          onMinus={handleMinus}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      </div>
      <div className="white info">
        <p>{price}</p>
      </div>
    </div>
  );
}

type QuantityProps = {
  quantity: number;
  onMinus: () => void;
  onAdd: () => void;
  onRemove: () => void;
};

function Quantity({ quantity, onMinus, onAdd, onRemove }: QuantityProps) {
  return (
    <>
      <div className="flex  items-center ">
        <div className="quantity-box">
          <div onClick={() => onMinus()}>-</div>
          <div>{quantity}</div>
          <div onClick={() => onAdd()}>+</div>
        </div>
        <Link to="/empty">
          <div className="ml-3 mt-2.5" onClick={() => onRemove()}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </Link>
      </div>
    </>
  );
}
