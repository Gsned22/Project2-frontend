import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Admin from './Admin';
import Cart from './Cart';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import NavBar from './Navbar';
import Register from './Register';
import CustomerProfile from './CustomerProfile';
import ResetPassword from './Reset-Password';
import NewPassword from './New-Password'
import Confirmation from './Confirmation';
import ProductDetails from './ProductDetails';
import ReviewOrders from './ReviewOrders';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />       
        <Route path="/customer/profile" element={<CustomerProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/reset/password' element={<ResetPassword/>}/>
        <Route path= '/new/password' element={<NewPassword/>}/>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/products/:product_number" element={<ProductDetails />} />
        <Route path="/orders/:username" element={<ReviewOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
