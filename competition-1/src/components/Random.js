import React from 'react';

const Random = ({ min, max }) => {
  // Generate a random integer between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      <p>Random number between {min} and {max}: {randomNumber}</p>
    </div>
  );
};

export default Random;
