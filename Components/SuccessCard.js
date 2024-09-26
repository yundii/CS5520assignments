import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const SuccessCard = ({ chosenNumber, attempts, resetGame }) => {
  return (
    <View style={styles.container}>
      <Text>Congratulations! You guessed the number in {attempts} attempts.</Text>
      <Image
        style={styles.image}
        source={{ uri: `https://picsum.photos/id/${chosenNumber}/100/100` }}
      />
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

export default SuccessCard;
