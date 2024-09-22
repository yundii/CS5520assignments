import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Start from './screens/Start';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const isValidName = name.length > 1 && isNaN(name);
  const isValidEmail = email.includes('@') && email.includes('.');
  const isValidPhone = phone.length === 10 && !isNaN(phone) && phone[9] !== '0' && phone[9] !== '1';

  const handleRegister = () => {
    if (isValidName && isValidEmail && isValidPhone) {
      setCurrentScreen('confirm');
    } else {
      Alert.alert('Error', 'Please fill in all fields correctly.');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setIsCheckboxChecked(false);
  };

  return (
    <View style={styles.container}>
      <Start
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          isValidName={isValidName}
          isValidEmail={isValidEmail}
          isValidPhone={isValidPhone}
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
          handleRegister={handleRegister}
          handleReset={handleReset}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
