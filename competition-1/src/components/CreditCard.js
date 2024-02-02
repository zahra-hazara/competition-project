import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => {
  // Format the credit card number to display only the last 4 digits
  const formattedNumber = number.slice(-4).padStart(number.length, '*');

  // Format the expiration date (MM/YY)
  const formattedExpiration = `${expirationMonth.toString().padStart(2, '0')}/${expirationYear.toString().slice(-2)}`;

  // Inline styles for the credit card
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    margin: '10px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <p>{type}</p>
      <h2>{formattedNumber}</h2>
      <p>
        Expires {formattedExpiration} <span>{bank}</span>
      </p>
      <p>{owner}</p>
    </div>
  );
};


export default CreditCard;
