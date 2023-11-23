import Homepage from './components/Homepage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import { Catalog } from './pages/Catalog';
import { useState } from 'react';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Routes>
        <Route path="/" element={<Header onSearch={setSearch} />}>
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
        </Route>
      </Routes>
    </>
  );
}
