import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const GameOverCard = ({ timeLeft, resetGame }) => {
  return (
    <View style={styles.container}>
      <Text>The game is over</Text>
      <Image source={require('../sad_smiley.png')} style={styles.image} />
      <Text>{timeLeft === 0 ? 'You are out of time' : 'You are out of attempts'}</Text>
      <Button title="New Game" onPress={resetGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default GameOverCard;
