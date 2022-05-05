import React, { useState } from 'react';

import Header from './components/Header';

import Card from './components/Card';

import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const cardsData = [
    { id: 1, title: 'Card 1', url: 'https://via.placeholder.com/200x300.png?text=Card%201' },
    { id: 2, title: 'Card 2', url: 'https://via.placeholder.com/200x300.png?text=Card%202' },
    { id: 3, title: 'Card 3', url: 'https://via.placeholder.com/200x300.png?text=Card%203' },
    { id: 4, title: 'Card 4', url: 'https://via.placeholder.com/200x300.png?text=Card%204' },
    { id: 5, title: 'Card 5', url: 'https://via.placeholder.com/200x300.png?text=Card%205' },
    { id: 6, title: 'Card 6', url: 'https://via.placeholder.com/200x300.png?text=Card%206' },
  ];

  const displayCards = (cardsData) => {
    return cardsData.map(({ id, title, url }) => (
      <Card title={title} url={url} markCardClicked={() => markCardClicked(id, cardsData)} />
    ));
  };

  const fetchCard = (cardID, cardsData) => {
    return cardsData.find(({ id, title, url }) => cardID === id);
  };

  const markCardClicked = (cardID, cardsData) => {
    setClickedCards(clickedCards.concat(fetchCard(cardID, cardsData)));
  };

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div id="cards">{displayCards(cardsData)}</div>
      <div>{clickedCards.map(({ id, title, url }) => title).join(', ')}</div>
    </div>
  );
}

export default App;
