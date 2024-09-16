import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      const storedData = userData ? JSON.parse(userData) : null;

      const { email, password } = formData;
      if (storedData && storedData.email === email && storedData.password === password) {
        Alert.alert('Login Successful!');
        console.log('Sign In Data:', { email, password });
        navigation.navigate('Landing'); // Navigate to landing page
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve data');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        onChangeText={setEmail} 
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
        onChangeText={setPassword} 
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
