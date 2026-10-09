import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

export default function CartItem({ onContinueShopping }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <section className="cart-layout">
        <div className="empty-cart">
          <h2 className="cart-title">Your Shopping Cart</h2>
          <p className="muted">Your cart is empty. Find a plant you love and add it here.</p>
          <button className="primary-button" onClick={onContinueShopping}>Continue Shopping</button>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-layout">
      <p className="eyebrow" style={{ color: '#66845e' }}>Almost home</p>
      <h2 className="cart-title">Your Shopping Cart</h2>
      <p className="muted">{items.reduce((sum, item) => sum + item.quantity, 0)} plant(s) in your cart</p>
      {items.map(item => (
        <div className="cart-row" key={item.id}>
          <div>
            <strong>{item.name}</strong>
            <div className="muted">${item.price.toFixed(2)} each</div>
          </div>
          <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
            <button aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
            <span>{item.quantity}</span>
            <button aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          </div>
          <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
          <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <button className="secondary-button" onClick={onContinueShopping}>Continue Shopping</button>
        <div><span className="muted">Cart total </span><strong className="price">${total.toFixed(2)}</strong></div>
      </div>
    </section>
  );
}
