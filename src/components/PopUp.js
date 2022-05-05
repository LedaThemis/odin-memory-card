import React from 'react';

import '../styles/PopUp.css';

const PopUp = (props) => {
  const { text, hidePopUp } = props;

  return (
    <div className="popup">
      <div className="popup-modal">
        <h3 className="popup-text">{text}</h3>
        <button id="close-popup-button" className="close-button" onClick={hidePopUp}>
          X
        </button>
      </div>
    </div>
  );
};

export default PopUp;
