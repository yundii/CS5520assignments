import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const SuccessCard = ({ chosenNumber, attempts, resetGame }) => {
  return (
    <View >
    <View style={styles.ButtonContainer}>
        <Button title="Restart" onPress={resetGame} style={styles.restartButton} />
    </View>
    <View style={styles.container}>
      <Text style={styles.text}>Congratulations! You guessed the number in {attempts} attempts.</Text>
      <Image
        style={styles.image}
        source={{ uri: `https://picsum.photos/id/${chosenNumber}/100/100` }}
      />
      <Button title="New Game" onPress={resetGame} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#C9C9E3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
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

export default SuccessCard;
