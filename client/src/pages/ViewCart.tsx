import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartProduct, removeFromCart } from '../lib';

export function ViewCart() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [cart, setCart] = useState<CartProduct[]>();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (cart?.length === 0) {
      navigate('/empty');
    }
  }, [cart, navigate]);

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

  function handleRemove(productId: number, size: number) {
    const updatedCart = cart?.filter(
      (item) => !(item.productId === productId && item.size === size)
    );
    setCart(updatedCart);
  }

  return (
    <>
      <div className="blue">
        <h1 className="ml-20 text-4xl white p-5">Your Cart</h1>
      </div>

      <div className="cart-container">
        <div className="cart-row1">
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
                  <CartCard cartProduct={product} onRemove={handleRemove} />
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
  onRemove: (productId: number, size: number) => void;
};

export function CartCard({ cartProduct, onRemove }: CardProps) {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const [total, setTotal] = useState(cartProduct.quantity * cartProduct.price);

  function handleAdd() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotal(newQuantity * cartProduct.price);
  }
  function handleMinus() {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotal(newQuantity * cartProduct.price);

      if (newQuantity === 0) {
        handleRemove();
      }
    }
  }
  async function handleRemove() {
    try {
      await removeFromCart(cartProduct.productId, cartProduct.size);
      onRemove(cartProduct.productId, cartProduct.size);
    } catch (error) {
      alert('Error removing products');
    }
  }

  const { size, name, imageUrl, brand } = cartProduct;
  return (
    <div className="cart-row">
      <div className=" white info">
        <div className="checkout-display">
          <img src={imageUrl} />
        </div>
        <div className="checkout-details">
          <p>Category</p>
          <p>{brand}</p>
          <p>{name}</p>
          <p>Size: {size}</p>
        </div>
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
        <p>${total}</p>
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

        <div className="ml-3 mt-2.5" onClick={() => onRemove()}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </>
  );
}
