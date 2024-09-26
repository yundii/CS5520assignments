import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GuessWrong = ({ guessWrong, resetGame, setGuessWrong }) => {
  return (
    <View>
        <View style={styles.ButtonContainer}>
        <Button title="Restart" onPress={resetGame} style={styles.restartButton} />
        </View>
    <View style={styles.container}>
      <Text style={styles.text}>You did not guess correct!</Text>
      <Text style={styles.text}>You should guess {guessWrong}.</Text>
      
      <Button title="Try Again" onPress={() => setGuessWrong(null)} />
      <Button title="End the game" onPress={resetGame} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9C9E3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#512da8',
    textAlign: 'center',
  },
  restartButton: {
    top: 40, 
    right: 200,
  },
  ButtonContainer: {
    width: '100%',
    paddingRight: 10,
    marginBottom: 30,
    marginLeft: 320,
  },
});

export default GuessWrong;
