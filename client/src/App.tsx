import Homepage from './components/Homepage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import { Catalog } from './pages/Catalog';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="womens" element={<Catalog text="Womens Shoes" />} />
          <Route path="mens" element={<Catalog text="Mens Shoes" />} />
          <Route path="kids" element={<Catalog text="Kids Shoes" />} />
        </Route>
      </Routes>
    </>
  );
}
