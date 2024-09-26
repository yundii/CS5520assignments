import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GuessCard = ({ guess, setGuess, timeLeft, attempts, handleGuess, handleHint, hintUsed, lastDigit }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Guess a number between 1 & 100 that is multiply of {lastDigit}.</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        value={guess}
        onChangeText={setGuess}
        keyboardType="numeric"
        />
        <Text style={styles.text}>Attempts Left: {attempts}</Text>
        <Text style={styles.text}>Timer: {timeLeft}s</Text>
        <Button title="Use a hint" onPress={handleHint} disabled={hintUsed} />
        <Button title="Submit guess" onPress={handleGuess} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9C9E3',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '100%',
    alignSelf: 'center',

  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#512da8',
    textAlign: 'center',
  },
});

export default GuessCard;
