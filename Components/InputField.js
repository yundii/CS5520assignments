import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import ErrorText from './ErrorText';

const InputField = ({ label, value, onChangeText, isValid, errorMessage }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        placeholderTextColor="#999"
      />
      {value.length > 0 && !isValid && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#1976d2',
    padding: 8,
    marginTop: 5,
  },
  label: {
    fontSize: 18,
    color: '#1976d2',
  },
});

export default InputField;