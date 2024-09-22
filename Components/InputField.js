import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import ErrorText from './ErrorText';

const InputField = ({ label, value, onChangeText, isValid, errorMessage }) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {!isValid && <ErrorText>{errorMessage}</ErrorText>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
    marginTop: 5,
  },
});

export default InputField;