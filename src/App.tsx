import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Admin from './Admin';
import Employee from './Employee';
import FinanceManager from './FinanceManager';
import Home from './Home';
import Login from './Login';
import UserProfile from './UserProfile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/profile" element={<UserProfile />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/financemanager" element={<FinanceManager />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
