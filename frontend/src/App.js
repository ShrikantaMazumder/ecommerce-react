import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Product from './components/Product';
import Home from './components/Home';

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open'); 
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }

  return (
      <Router>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">E-Commerce</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="singin.html">Sign in</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-btn" onClick={closeMenu}>X</button>
            <ul>
                <li>
                    <Link to="/">Pants</Link>
                </li>
                <li>
                    <Link to="/">Shirts</Link>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
                <Route path="/product/:id" component={Product} />
                <Route path="/" exact component={Home} />
            </div>
            
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
    </Router>
  );
}

export default App;
