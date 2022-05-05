import React from 'react';

import Scoreboard from './Scoreboard';

import '../styles/Header.css';

const Header = (props) => {
  const { currentScore, bestScore } = props;

  return (
    <header id="header">
      <h1 id="header--title">Memory Card</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
};

export default Header;
