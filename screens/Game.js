import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import StartCard from './StartCard';
import GuessCard from './GuessCard';
import GameOverCard from './GameOverCard';
import SuccessCard from './SuccessCard';

const GameScreen = ({ phone, resetGame }) => {
  const [chosenNumber, setChosenNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);
  const [hintUsed, setHintUsed] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const lastDigit = parseInt(phone[9]);

  useEffect(() => {
    if (!chosenNumber) {
      // Generate the chosen number based on the last digit of the phone number
      const possibleNumbers = [];
      for (let i = 1; i <= 100; i++) {
        if (i % lastDigit === 0) possibleNumbers.push(i);
      }
      setChosenNumber(possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)]);
    }
  }, [lastDigit]);

  useEffect(() => {
    // Countdown timer
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      alert('Invalid Guess. Please enter a number between 1 and 100.');
      return;
    }
    if (guessedNumber === chosenNumber) {
      setGameWon(true);
      setGameOver(true);
    } else {
      setAttempts(attempts - 1);
      if (attempts === 1) {
        setGameOver(true);
      }
    }
  };

  const handleHint = () => {
    if (!hintUsed) {
      const lowerBound = Math.max(1, chosenNumber - 10);
      const upperBound = Math.min(100, chosenNumber + 10);
      alert(`Hint: The number is between ${lowerBound} and ${upperBound}.`);
      setHintUsed(true);
    }
  };

  if (gameOver) {
    return gameWon ? (
      <SuccessCard chosenNumber={chosenNumber} attempts={4 - attempts} resetGame={resetGame} />
    ) : (
      <GameOverCard timeLeft={timeLeft} resetGame={resetGame} />
    );
  }

  return (
    <View style={styles.container}>
      {showModal ? (
        <GuessCard
          guess={guess}
          setGuess={setGuess}
          timeLeft={timeLeft}
          attempts={attempts}
          handleGuess={handleGuess}
          handleHint={handleHint}
          hintUsed={hintUsed}
        />
      ) : (
        <StartCard onStart={() => setShowModal(true)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameScreen;
