import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = ({ isChecked, setIsChecked }) => {
  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, isChecked && styles.checked]} />
      <Text style={styles.label}>I agree to the terms and conditions</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#1976d2',
  },
  label: {
    fontSize: 16,
    color: '#1976d2',
  },
});

export default Checkbox;
