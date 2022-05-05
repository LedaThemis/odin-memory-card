import React from 'react';

import '../styles/LostPopup.css';

const LostPopup = (props) => {
  const { hidePopUp } = props;

  return (
    <div className="lost-popup">
      <div className="lost-popup-modal">
        <h3 className="lost-popup-text">You Lost!</h3>
        <button id="close-lostpopup-button" className="close-button" onClick={hidePopUp}>
          X
        </button>
      </div>
    </div>
  );
};

export default LostPopup;
