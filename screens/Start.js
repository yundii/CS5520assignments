import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import InputField from '../Components/InputField';
import Checkbox from '../Components/Checkbox';

const StartScreen = ({
    name, setName, email, setEmail, phone, setPhone, isCheckboxChecked, setIsCheckboxChecked,
    isValidName, isValidEmail, isValidPhone, handleRegister, handleReset,
  }) => {
    return (
      <View>
        <Text style= {styles.title}>Welcome</Text>
        <View style={styles.card}>
        <InputField
          label="Name"
          value={name}
          onChangeText={setName}
          isValid={isValidName}
          errorMessage="Name must be longer than 1 character and non-numeric"
        />
        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          isValid={isValidEmail}
          errorMessage="Enter a valid email"
        />
        <InputField
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          isValid={isValidPhone}
          errorMessage="Enter a valid phone number (10 digits, last digit not 0 or 1)"
        />
        <Checkbox
        isChecked={isCheckboxChecked}
        setIsChecked={setIsCheckboxChecked}
        />

        <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={handleReset} color= 'red'/>
        <Button
          title="Register"
          onPress={handleRegister}
          disabled={!isCheckboxChecked}
          color={isCheckboxChecked ? '#1976d2' : '#aaa'}
        />
        </View>

        </View>
      </View>
        
    );
  };
  
  const styles = StyleSheet.create({
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
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      title: {
        fontSize: 30,
        padding: 40,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
        marginLeft: 55,
      },
  });
  
  export default StartScreen;