import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorText = ({ children }) => {
  return <Text style={styles.errorText}>{children}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'grey',
    marginTop: 5,
  },
});

export default ErrorText;