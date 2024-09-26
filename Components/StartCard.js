import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartCard = ({ onStart }) => {
  return (
    <View style={styles.container}>
      <Text>Guess a number between 1 & 100 that is multiply of 9.</Text>
      <Button title="Start" onPress={onStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default StartCard;
