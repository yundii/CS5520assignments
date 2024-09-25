import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Confirm = ({ name, email, phone, goBack, continue: proceed }) => {
  return (
    <Modal transparent={true} animationType="slide">
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)']}
        style={styles.background}
      >
          <View style={styles.card}>
            <Text style={styles.greeting}>Hello {name}</Text>
            <Text style={styles.infoText}>Here is the information you entered:</Text>
            <Text style={styles.infoText}>{email}</Text>
            <Text style={styles.infoText}>{phone}</Text>
            <Text style={styles.infoText}>
              If it is not correct, please go back and edit them.
            </Text>

            <View style={styles.buttonContainer}>
              <Button title="Go back" onPress={goBack} color="#d32f2f" />
              <Button title="Continue" onPress={proceed} color="#1976d2" />
            </View>
          </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    width: '85%',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#512da8',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#512da8',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Confirm;
