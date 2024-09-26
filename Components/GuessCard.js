import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GuessCard = ({ guess, setGuess, timeLeft, attempts, handleGuess, handleHint, hintUsed }) => {
  return (
    <View style={styles.container}>
      <Text>Time Left: {timeLeft}s</Text>
      <Text>Attempts Left: {attempts}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        value={guess}
        onChangeText={setGuess}
        keyboardType="numeric"
      />
      <Button title="Submit guess" onPress={handleGuess} />
      <Button title="Use a hint" onPress={handleHint} disabled={hintUsed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 100,
    textAlign: 'center',
  },
});

export default GuessCard;
