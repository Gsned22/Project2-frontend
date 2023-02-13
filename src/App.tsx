import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Admin from './Admin';
import Cart from './Cart';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import NavBar from './Navbar';
import UserProfile from './UserProfile';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/profile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;