import React from 'react';
import './Inspiration.css';
import TilesImg from '../assets/Tiles.png';
import SPCHybridImg from '../assets/SPEHybrid.jpg';
import LaminateImg from '../assets/Laminate.jpg';
import WallPanelImg from '../assets/WallPenal.jpg';

const products = [
  {
    name: 'TILES',
    description: 'Durable and elegant ceramic and porcelain tiles.',
    img: TilesImg,
    swatch: TilesImg,
    type: 'product',
  },
  {
    name: 'SPC HYBRID',
    description: 'Stone polymer composite for waterproof durability.',
    img: SPCHybridImg,
    swatch: SPCHybridImg,
    type: 'product',
  },
];

const InspirationSection = () => {
  return (
    <section className="inspiration-2grid">
      <div className="inspiration-box">
        <div className='inspiration-content'>
          <h2>Explore our inspiration</h2>
          <p className="description">
            Discover design ideas with our top flooring products. Stylish, functional, and crafted for any space.
          </p>
        </div>
        <div className='inspiration-button'>
          <button className="explore-button">
            View Inspiration Gallery <span>&rarr;</span>
          </button>
        </div>
      </div>

      <div className="inspiration-grid">
        {products.map((product, index) => (
          <div className="inspiration-card" key={index}>
            <div className="image-wrapper">
              <img src={product.img} alt={product.name} className="main-image" />
              <img src={product.swatch} alt={`${product.name} swatch`} className="swatch-image" />
              <div className="overlay-text">
                <strong>{product.name}</strong><br />
                {product.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
