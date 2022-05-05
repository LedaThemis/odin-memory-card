import React, { useState } from 'react';

import '../styles/Card.css';

const Card = (props) => {
  const { url, title } = props;

  return (
    <div className="card">
      <img className="card--image" src={url} alt="" draggable="false" />
      <h3 className="card--title" draggable="false">
        {title}
      </h3>
    </div>
  );
};

export default Card;
