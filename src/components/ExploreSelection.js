import React from 'react';
import './ExploreSelection.css';
import exploreImg from '../assets/Tiles.png'; // use your actual image

const ExploreSection = () => {
  return (
    <section className="explore-section">
      <div className="explore-content">
        <p className="subheading">LEADING SUPPLIER OF QUALITY FLOORING</p>
        <h2>Explore our ranges</h2>
        <p className="description">
         Discover a premium selection of flooring solutions, crafted to deliver durability, style, and value-perfect for every room and every budget.
        </p>
        <button className="explore-button">
          Explore our range <span>&rarr;</span>
        </button>
      </div>
      <div className="explore-image">
        <img src={exploreImg} alt="Flooring showcase" />
      </div>
    </section>
  );
};

export default ExploreSection;
