import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import Start from './screens/Start';
import Confirm from './screens/Confirm';
import Game from './screens/Game';
import { LinearGradient } from 'expo-linear-gradient';


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
      Alert.alert('Invalid Input', 'Check the input values');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setIsCheckboxChecked(false);
  };

  const handleRestartGame = () => {
    handleReset();
    setCurrentScreen('start');
  };

  return (
    <LinearGradient
      colors={['lightblue', '#8573C7']} 
      style={styles.background}
    >
    <View style ={styles.title}>
      <Text>Welcome</Text>
    </View>

    
    <View style={styles.container}>
    {currentScreen === 'start' ? (
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
        ) : currentScreen === 'confirm' ? (
          <Confirm
            name={name}
            email={email}
            phone={phone}
            goBack={() => setCurrentScreen('start')}
            continue={() => setCurrentScreen('game')}
          />
        ) : (
            <Game phone={phone} resetGame={handleRestartGame} />
      )}
      <StatusBar style="auto" />
    </View>
    
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    padding: 40,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
