import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import {
  CartProduct,
  removeFromCart,
  updateCart,
  fetchCart,
  categoryNames,
  removeAll,
} from '../lib';

type Props = {
  onChange: (quantity: number) => void;
  onRemove: () => void;
};

export function ViewCart({ onChange, onRemove }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [cart, setCart] = useState<CartProduct[]>();
  const navigate = useNavigate();
  const subtotal = cart?.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  useEffect(() => {
    async function loadFetchCart() {
      try {
        const data = await fetchCart();
        setCart(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadFetchCart();
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

  function handleRemove(cartId: number) {
    if (!cart) {
      return;
    }
    const updatedCart = cart.filter((item) => !(item.cartId === cartId));
    setCart(updatedCart);
    let quantity = 0;
    for (let i = 0; i < updatedCart.length; i++) {
      quantity += updatedCart[i].quantity;
    }
    onChange(quantity);
  }

  async function handleRemoveAll(cartId: number) {
    try {
      await removeAll(cartId);
      setCart([]);
      onRemove();
    } catch (error) {
      setError(error);
    }
  }

  function handleUpdate(cartId: number, quantity: number) {
    if (!cart) {
      return;
    }
    const updatedCart = cart.map((item) => {
      if (item.cartId === cartId) {
        item.quantity = quantity;
        return item;
      } else {
        return item;
      }
    });
    setCart(updatedCart);

    let q = 0;
    for (let i = 0; i < updatedCart.length; i++) {
      q += updatedCart[i].quantity;
    }
    onChange(q);
  }

  return (
    <>
      <div className="mb-20">
        <h1 className="ml-20 text-4xl white p-5">Your Cart</h1>
      </div>

      <div className="cart-container ">
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

        <div className="cart-row">
          <div className="white checkout-details">
            {cart?.map((product) => (
              <div key={product.cartId}>
                <CartCard
                  cartProduct={product}
                  onRemove={handleRemove}
                  onUpdate={handleUpdate}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="checkout-row-subtotal">
        <p className="white subtotal-text">Subtotal ${subtotal}</p>
      </div>

      <div className="checkout-row">
        <Link to="/checkout">
          <div className="checkout-border">
            <div>
              <button
                className="checkout-button"
                onClick={() => handleRemoveAll(cart[0].cartId)}>
                Checkout
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
type CardProps = {
  cartProduct: CartProduct;
  onRemove: (cartId: number) => void;
  onUpdate: (cartId: number, quantity: number) => void;
};

export function CartCard({ cartProduct, onRemove, onUpdate }: CardProps) {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const total = cartProduct.quantity * cartProduct.price;

  async function handleAdd() {
    try {
      const newQuantity = quantity + 1;
      await updateCart(cartProduct.cartId, newQuantity);
      if (newQuantity > 0) {
        setQuantity(newQuantity);
        onUpdate(cartProduct.cartId, newQuantity);
      }
    } catch (error) {
      console.log(error);
      alert('Error adding products');
    }
  }
  async function handleMinus() {
    try {
      const newQuantity = quantity - 1;

      if (newQuantity > 0) {
        await updateCart(cartProduct.cartId, newQuantity);
        setQuantity(newQuantity);
        onUpdate(cartProduct.cartId, newQuantity);
      } else {
        await handleRemove();
      }
    } catch (error) {
      alert('Error removing products');
    }
  }

  async function handleRemove() {
    try {
      await removeFromCart(cartProduct.cartId);
      onRemove(cartProduct.cartId);
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
          <p>{categoryNames[cartProduct.categoryId]}</p>
          <p>{brand}</p>
          <p>{name}</p>
          <p>Size: {size}</p>
        </div>
      </div>

      <div className="white info">
        <Quantity
          quantity={quantity}
          onUpdate={handleMinus}
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
  onUpdate: () => void;
  onAdd: () => void;
  onRemove: () => void;
};

function Quantity({ quantity, onUpdate, onAdd, onRemove }: QuantityProps) {
  return (
    <>
      <div className="flex  items-center ">
        <div className="quantity-box">
          <div onClick={() => onUpdate()}>-</div>
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
