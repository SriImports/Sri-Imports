import './HeroSection.css';

import React, { useEffect, useState } from 'react';
import bg1 from '../assets/1bg.jpg.JPG'; // your current image
import bg2 from '../assets/2bg.JPG'; // another image

const HeroSection = () => {
  const images = [bg1, bg2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="hero" style={{ backgroundImage: `url(${images[current]})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        
        <div className='heading'>
            <h1>Australia’s Premier Flooring,</h1>
            <h1>Beauifully Crafted</h1>
        </div>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default HeroSection;
