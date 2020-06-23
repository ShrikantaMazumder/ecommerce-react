import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onclick="openMenu()">
                    &#9776;
                </button>
                <a href="index.html">E-Commerce</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="singin.html">Sign in</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-btn" onclick="closeMenu()">X</button>
            <ul>
                <li>
                    <a href="/">Pants</a>
                </li>
                <li>
                    <a href="/">Shirts</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="Product" />
                            <div className="product-name">
                               <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">
                                Nike
                            </div>
                            <div className="product-price">$260 </div>
                            <div className="product-rating">4.5 Stars (10 Reviews) </div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="Product" />
                            <div className="product-name">
                               <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">
                                Nike
                            </div>
                            <div className="product-price">$260 </div>
                            <div className="product-rating">4.5 Stars (10 Reviews) </div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="Product" />
                            <div className="product-name">
                               <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">
                                Nike
                            </div>
                            <div className="product-price">$260 </div>
                            <div className="product-rating">4.5 Stars (10 Reviews) </div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="Product" />
                            <div className="product-name">
                               <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">
                                Nike
                            </div>
                            <div className="product-price">$260 </div>
                            <div className="product-rating">4.5 Stars (10 Reviews) </div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="Product" />
                            <div className="product-name">
                               <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">
                                Nike
                            </div>
                            <div className="product-price">$260 </div>
                            <div className="product-rating">4.5 Stars (10 Reviews) </div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="Product" />
                            <div className="product-name">
                               <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">
                                Nike
                            </div>
                            <div className="product-price">$260 </div>
                            <div className="product-rating">4.5 Stars (10 Reviews) </div>
                        </div>
                    </li>
                </ul>
            </div>
            
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
  );
}

export default App;
