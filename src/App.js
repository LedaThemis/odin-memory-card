import React, { useState } from 'react';

import Header from './components/Header';

import Card from './components/Card';

import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const cardsData = [
    { title: 'Card 1', url: 'https://via.placeholder.com/200x300.png?text=Card%201' },
    { title: 'Card 2', url: 'https://via.placeholder.com/200x300.png?text=Card%202' },
    { title: 'Card 3', url: 'https://via.placeholder.com/200x300.png?text=Card%203' },
    { title: 'Card 4', url: 'https://via.placeholder.com/200x300.png?text=Card%204' },
    { title: 'Card 5', url: 'https://via.placeholder.com/200x300.png?text=Card%205' },
    { title: 'Card 6', url: 'https://via.placeholder.com/200x300.png?text=Card%206' },
  ];

  const displayCards = (cardsData) => {
    return cardsData.map(({ title, url }) => <Card title={title} url={url} />);
  };

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div id="cards">{displayCards(cardsData)}</div>
    </div>
  );
}

export default App;
