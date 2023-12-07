import Homepage from './components/Homepage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import { Catalog } from './pages/Catalog';
import { useEffect, useState } from 'react';
import { ProductDetails } from './pages/ProductDetails';
import { ViewCart } from './pages/ViewCart';
import { EmptyCart } from './pages/EmptyCart';
import { Checkout } from './pages/Checkout';
import { fetchCart } from './lib';

export default function App() {
  const [search, setSearch] = useState('');
  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    async function loadFetchCart() {
      try {
        const data = await fetchCart();

        let quantity = 0;
        for (let i = 0; i < data.length; i++) {
          quantity += data[i].quantity;
        }

        setCartQuantity(quantity);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadFetchCart();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Header onSearch={setSearch} cartQuantity={cartQuantity} />}>
          <Route index element={<Homepage search={search} />} />
          <Route
            path="womens"
            element={
              <Catalog text="Womens Shoes" categoryId={2} search={search} />
            }
          />
          <Route
            path="mens"
            element={
              <Catalog text="Mens Shoes" categoryId={1} search={search} />
            }
          />
          <Route
            path="kids"
            element={
              <Catalog text="Kids Shoes" categoryId={3} search={search} />
            }
          />
          <Route
            path="details/:productId"
            element={<ProductDetails onAdd={setCartQuantity} />}
          />
          <Route
            path="cart"
            element={
              <ViewCart
                onChange={setCartQuantity}
                onRemove={() => setCartQuantity(0)}
              />
            }
          />
          <Route path="empty" element={<EmptyCart search={search} />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}
