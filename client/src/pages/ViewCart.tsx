import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export function ViewCart() {
  const [quantity, setQuantity] = useState(0);

  function handleAdd() {
    setQuantity(quantity + 1);
  }

  function handleMinus() {
    setQuantity(quantity - 1);
  }

  function handleRemove() {
    setQuantity(0);
  }

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
        <div className="cart-row">
          <div className=" white info">
            <p>Product</p>
          </div>

          <div className="white info">
            <Quantity />
          </div>
          <div className="white info">
            <p>Total</p>
          </div>
        </div>
      </div>
    </>
  );

  function Quantity() {
    return (
      <>
        <div className="flex  items-center ">
          <div className="quantity-box">
            <div onClick={() => handleMinus()}>-</div>
            <div>{quantity}</div>
            <div onClick={() => handleAdd()}>+</div>
          </div>
          <div className="ml-3 mt-2.5" onClick={() => handleRemove()}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </>
    );
  }
}
