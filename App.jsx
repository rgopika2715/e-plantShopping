import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const cartCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  const startShopping = () => setPage('products');

  return (
    <>
      <header className="site-header">
        <button className="brand" onClick={() => setPage('home')} aria-label="Go to home">
          Paradise Nursery <span>Grow something beautiful</span>
        </button>
        <nav className="nav" aria-label="Main navigation">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('about')}>About Us</button>
          <button onClick={() => setPage('products')}>Plants</button>
          <button onClick={() => setPage('cart')}>Shopping Cart <span className="cart-count">{cartCount}</span></button>
        </nav>
      </header>

      {page === 'home' && (
        <section className="background-image">
          <div className="hero-copy">
            <p className="eyebrow">A little more green, every day</p>
            <h1>Welcome to Paradise Nursery</h1>
            <p>Discover beautiful indoor plants that make your space feel fresh, calm, and full of life.</p>
            <button className="primary-button" onClick={startShopping}>Get Started</button>
          </div>
        </section>
      )}

      <main>
        {page === 'about' && <AboutUs />}
        {page === 'products' && <ProductList />}
        {page === 'cart' && <CartItem onContinueShopping={startShopping} />}
      </main>
      <footer>© {new Date().getFullYear()} Paradise Nursery · Bring nature home</footer>
    </>
  );
}
