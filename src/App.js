import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import PopUp from './components/PopUp';

import Card from './components/Card';

import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [cardsList, setCardsList] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime/199/characters')
      .then((res) => res.json())
      .then((data) => setFetchedData(processData(data)));
  }, []);

  useEffect(() => {
    if (fetchedData === []) return;
    setCardsList(shuffleCards(fetchedData));
  }, [clickedCards, fetchedData]);

  useEffect(() => {
    updateBestScore();
    checkIfWon();
  }, [currentScore]);

  const displayCards = (cardsData) => {
    return cardsData.map(({ id, title, url }) => (
      <Card key={id} title={title} url={url} markCardClicked={() => markCardClicked(id, cardsData)} />
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
      setLost(true);
      resetGame();
    } else {
      setClickedCards(clickedCards.concat(fetchCard(cardID, cardsData)));
      incrementScore();
    }
  };

  const checkIfWon = () => {
    if (cardsList.length === 0) return;
    if (currentScore >= cardsList.length) {
      setWon(true);
    }
  };

  const incrementScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const updateBestScore = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  const resetClickedCards = () => {
    setClickedCards([]);
  };

  const resetGame = () => {
    resetScore();
    resetClickedCards();
    setWon(false);
  };

  const processData = (data) => {
    return data.data
      .map(({ character }) => character)
      .map(({ mal_id, images, name }) => ({
        id: mal_id,
        title: name,
        url: images.jpg.image_url,
      }));
  };

  return (
    <div className="App">
      {lost && <PopUp text="You Lost!" hidePopUp={() => setLost(false)} />}
      {won && <PopUp text="You Won ????" hidePopUp={() => resetGame()} />}
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div id="cards">{displayCards(cardsList)}</div>
    </div>
  );
}

export default App;
