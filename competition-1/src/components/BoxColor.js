import React from 'react';

const BoxColor = ({ r, g, b }) => {
  // Ensure that the RGB values are within the valid range (0 to 255)
  const validR = Math.min(255, Math.max(0, r));
  const validG = Math.min(255, Math.max(0, g));
  const validB = Math.min(255, Math.max(0, b));

  const hexColor = `#${validR.toString(16).padStart(2, '0')}${validG.toString(16).padStart(2, '0')}${validB.toString(16).padStart(2, '0')}`;

  // Inline style object for the background color
  const boxStyle = {
    backgroundColor: `rgb(${validR}, ${validG}, ${validB})`,
    width: '1650px',
    height: '100px',
    border: '1px solid #000',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  return (
    <div style={boxStyle}>
      <p>{hexColor}</p>
    </div>
  );
};

export default BoxColor;
