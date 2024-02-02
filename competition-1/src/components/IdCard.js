import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card-box">
      <div className="id-card">
        <img src={picture} alt={`${firstName} ${lastName}`} className="id-card-image" />
        <div className="id-card-info">
          <strong>Last Name:</strong> {lastName}<br />
          <strong>First Name:</strong> {firstName}<br />
          <strong>Gender:</strong> {gender}<br />
          <strong>Height:</strong> {height}cm<br />
          <strong>Birth:</strong> {birth.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default IdCard;
