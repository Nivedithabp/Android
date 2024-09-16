import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Landing({ navigation }) {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and SignUp
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    country: '',
    gender: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Handle SignUp
  const handleSignUp = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(formData));
      alert('Sign Up Successful! Please log in.');
      setIsSignUp(false); // Switch to login after signup
    } catch (error) {
      alert('Error: Failed to sign up');
    }
  };

  // Handle Login
  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      const storedData = userData ? JSON.parse(userData) : null;
      if (storedData && storedData.email === formData.email && storedData.password === formData.password) {
        alert('Login Successful!');
        navigation.navigate('Home'); // Navigate to Home page after successful login
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      alert('Error: Failed to log in');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Login'}</Text>

      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        onChangeText={(value) => handleChange('email', value)} 
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
        onChangeText={(value) => handleChange('password', value)} 
      />

      {/* If Sign Up is chosen, show additional inputs */}
      {isSignUp && (
        <>
          <TextInput 
            placeholder="Name" 
            style={styles.input} 
            onChangeText={(value) => handleChange('name', value)} 
          />
        </>
      )}

      <Button title={isSignUp ? 'Sign Up' : 'Login'} onPress={isSignUp ? handleSignUp : handleLogin} />

      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.toggleText}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  toggleText: {
    marginTop: 15,
    color: '#3b5998', // Instagram theme color for links
    textDecorationLine: 'underline',
  },
});
