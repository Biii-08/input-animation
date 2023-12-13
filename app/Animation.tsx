import React from 'react';

const Animation = () => {
  const numOfItems = 40; // Adjust the number of items as needed

  const items = Array.from({ length: numOfItems }, (_, index) => (
    <li key={index}></li>
  ));

  return (
    <div>
      <ul className="strand">{items}</ul>
    </div>
  );
};

export default Animation;
