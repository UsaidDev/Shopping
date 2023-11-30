import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cart/Cart';
import ProductDetails from '../ProductDetails/ProductDetails';

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/product/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default Router;