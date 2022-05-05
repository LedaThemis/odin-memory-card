import React, { useState, useEffect } from 'react';
import cardsData from './cardsData';

import Header from './components/Header';

import Card from './components/Card';

import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    setCardsList(shuffleCards(cardsData));
  }, [clickedCards]);

  const displayCards = (cardsData) => {
    return cardsData.map(({ id, title, url }) => (
      <Card title={title} url={url} markCardClicked={() => markCardClicked(id, cardsData)} />
    ));
  };

  const fetchCard = (cardID, cardsData) => {
    return cardsData.find(({ id, title, url }) => cardID === id);
  };

  const alreadyClicked = (cardID) => {
    return clickedCards.some(({ id, title, url }) => id === cardID);
  };

  const shuffleCards = (cardsData) => {
    return shuffleArray(cardsData);
  };

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const markCardClicked = (cardID, cardsData) => {
    if (alreadyClicked(cardID)) {
      //resetGame();
    } else {
      setClickedCards(clickedCards.concat(fetchCard(cardID, cardsData)));
    }
  };

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div id="cards">{displayCards(cardsList)}</div>
      <div>{clickedCards.map(({ id, title, url }) => title).join(', ')}</div>
    </div>
  );
}

export default App;
