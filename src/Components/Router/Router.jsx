import React, { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Cart from '../Cart/Cart'
import Navbar from '../Navbar/Navbar';
function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Router
