import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cart from './Cart';
import Checkout from './Checkout/Checkout';
import Checkout_cart_prod_card from './Checkout/Checkout_cart_prod_card';
import Home from './Home';
import Product from './Product';
import Profile from './Profile';
import Signup from './Signup';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/product' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default AllRoutes;
