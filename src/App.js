import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Login from './Login';
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Login"
          element={
            loggedIn ? 
            (
              <Navigate to="/Product" />
            ) : (
              <Login onLogin={() => setLoggedIn(true)} />
            )
          }
        />
        <Route
          path="Product"
          element={
            loggedIn ? (
              <Outlet>
                <Route index element={<Product />} />
              </Outlet>
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
            </Routes>
    </Router>
  );
}

  
  export default App;
  
  
  
  
  
  
