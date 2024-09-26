import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartCard = ({ onStart, lastDigit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess a number between 1 & 100 that is multiply of {lastDigit}.</Text>
      <Button title="Start" onPress={onStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9C9E3',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#512da8',
    textAlign: 'center',
  },
});

export default StartCard;
