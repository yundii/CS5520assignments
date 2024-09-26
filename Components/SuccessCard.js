import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const SuccessCard = ({ chosenNumber, attempts, resetGame }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congratulations! You guessed the number in {attempts} attempts.</Text>
      <Image
        style={styles.image}
        source={{ uri: `https://picsum.photos/id/${chosenNumber}/100/100` }}
      />
      <Button title="New Game" onPress={resetGame} />
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
  },
  card: {
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#f0f0f0',
    width: '90%',
    height: '70%',
    
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#512da8',
    textAlign: 'center',
  },
});

export default SuccessCard;
