import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

export default function SignUp({ navigation }) {
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

  const handleSubmit = async () => {
    try {
      // Store user data in AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(formData));
      console.log('Sign Up Data:', formData);
      Alert.alert('Sign Up Successful!', 'You can now log in.');
      navigation.navigate('Login'); // Navigate to login screen
    } catch (error) {
      Alert.alert('Error', 'Failed to store data');
    }
  };

  return (
    <View style={styles.container}>
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
      <TextInput 
        placeholder="Name" 
        style={styles.input} 
        onChangeText={(value) => handleChange('name', value)} 
      />

      {/* Country Picker */}
      <Picker
        selectedValue={formData.country}
        onValueChange={(itemValue) => handleChange('country', itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select Country" value="" />
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="India" value="India" />
      </Picker>

      {/* Gender Picker */}
      <Picker
        selectedValue={formData.gender}
        onValueChange={(itemValue) => handleChange('gender', itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

      <Button title="Sign Up" onPress={handleSubmit} />
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
