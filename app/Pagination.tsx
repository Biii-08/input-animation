'use client'
import React, { useState, useEffect } from 'react';

const Pagination = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(false);
    }, 3000); 

    return () => clearTimeout(animationTimeout);
  }, []); 
  
  const getRandomSize = () => Math.floor(Math.random() * 50) + 15; 

  const snowflakeSizes = Array.from({ length: 45 }, () => getRandomSize());

  return (
    <div>
      <ul className={`bgg ${animate ? 'animate' : ''}`}>
        {snowflakeSizes.map((size, index) => (
          <li key={index} className="snowflake" style={{ fontSize: `${size}px` }}>
            *
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
