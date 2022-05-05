import React from 'react';

import '../styles/WonPopup.css';

const LostPopup = (props) => {
  const { hidePopUp } = props;

  return (
    <div className="won-popup">
      <div className="won-popup-modal">
        <h3 className="won-popup-text">You Won 🎉</h3>
        <button id="close-wonpopup-button" className="close-button" onClick={hidePopUp}>
          X
        </button>
      </div>
    </div>
  );
};

export default LostPopup;
