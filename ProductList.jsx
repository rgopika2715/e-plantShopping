import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice.jsx';

const plants = [
  { id: 'snake-plant', name: 'Snake Plant', price: 18.99, description: 'A hardy, sculptural plant for bright or low-light rooms.', emoji: '🪴', category: 'Easy care' },
  { id: 'monstera', name: 'Monstera Deliciosa', price: 27.50, description: 'Bold split leaves bring a tropical look to your space.', emoji: '🌿', category: 'Tropical' },
  { id: 'peace-lily', name: 'Peace Lily', price: 21.00, description: 'Elegant green leaves with graceful white blooms.', emoji: '🌱', category: 'Flowering' },
  { id: 'pothos', name: 'Golden Pothos', price: 14.75, description: 'A trailing favorite that looks lovely on shelves.', emoji: '🍃', category: 'Easy care' },
  { id: 'rubber-plant', name: 'Rubber Plant', price: 24.00, description: 'Glossy, deep-green leaves make a strong statement.', emoji: '🌳', category: 'Statement' },
  { id: 'succulent', name: 'Succulent Set', price: 12.50, description: 'A cheerful set of compact plants for sunny spots.', emoji: '🌵', category: 'Small spaces' }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <section className="content-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow" style={{ color: '#66845e' }}>Find your green companion</p>
          <h2>Shop our plants</h2>
          <p className="muted">Thoughtfully selected plants for every kind of space.</p>
        </div>
      </div>
      <div className="product-grid">
        {plants.map(plant => (
          <article className="product-card" key={plant.id}>
            <div className="plant-art" role="img" aria-label={plant.name}>{plant.emoji}</div>
            <div className="product-info">
              <p className="eyebrow" style={{ color: '#66845e' }}>{plant.category}</p>
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <div className="product-bottom">
                <span className="price">${plant.price.toFixed(2)}</span>
                <button className="small-button" onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
