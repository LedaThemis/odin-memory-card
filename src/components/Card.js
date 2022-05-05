import React from 'react';

import '../styles/Card.css';

const Card = (props) => {
  const { url, title, markCardClicked } = props;

  return (
    <div className="card" onClick={markCardClicked}>
      <img className="card--image" src={url} alt="" draggable="false" />
      <h3 className="card--title" draggable="false">
        {title}
      </h3>
    </div>
  );
};

export default Card;
