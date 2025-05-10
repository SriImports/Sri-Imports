import React from 'react';
import './ProductGrid.css';
import TilesImg from '../assets/Tiles.png';
import SPCHybridImg from '../assets/SPEHybrid.jpg';
import LaminateImg from '../assets/Laminate.jpg';
import WallPanelImg from '../assets/WallPenal.jpg';

const products = [
  { name: 'Tiles', image: TilesImg },
  { name: 'SPC Hybrid', image: SPCHybridImg },
  { name: 'Laminate', image: LaminateImg },
  { name: 'SPA-Wall Panel', image: WallPanelImg },
];

function ProductGrid() {
  return (
    <section className="product-section">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
