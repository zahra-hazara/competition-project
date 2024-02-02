import React from 'react';

const Greetings = ({ lang, children }) => {
  let greeting = '';

  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello'; // Default to English greeting if language is not recognized
  }

  const greetingStyle = {
    fontWeight: 'auto',
    textAlign: 'left',
    marginLeft: '30px'
  };
  
  return (
    <div style={greetingStyle}>
      <p>{greeting}, {children}</p>
    </div>
  );
};

export default Greetings;
