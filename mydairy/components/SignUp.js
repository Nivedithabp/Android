import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome

export default function SignUp({ navigation }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    birthdate: new Date(), // Birthdate added
    country: '',
    gender: '',
    biography: '', // Biography added
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    handleChange('birthdate', selectedDate || formData.birthdate);
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60} // Adjust this for better keyboard handling
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <Text style={styles.heading}>Sign Up</Text> */}

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

        {/* Birthdate Input with Calendar Icon */}
        <View style={styles.dateInputContainer}>
          <TextInput
            placeholder="Birth date DD/MM/YYYY"
            style={styles.dateInput}
            value={formData.birthdate.toDateString()} // Display selected date
            editable={false} // Make it non-editable
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.iconContainer}>
            <Icon name="calendar" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* DateTime Picker */}
        {showDatePicker && (
          <DateTimePicker
            value={formData.birthdate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {/* Country Picker */}
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Country</Text>
          <Picker
            selectedValue={formData.country}
            onValueChange={(itemValue) => handleChange('country', itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Country" value="" />
            <Picker.Item label="USA" value="USA" />
            <Picker.Item label="India" value="India" />
          </Picker>
        </View>

        {/* Gender Picker */}
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Gender</Text>
          <Picker
            selectedValue={formData.gender}
            onValueChange={(itemValue) => handleChange('gender', itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View>

        {/* Biography Field */}
        <TextInput
          placeholder="Biography"
          multiline
          numberOfLines={4}
          style={[styles.input, styles.biographyInput]} 
          onChangeText={(value) => handleChange('biography', value)}
        />

        <Button title="Sign Up" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  biographyInput: {
    height: 100, // Increased height for multiline biography input
    textAlignVertical: 'top', // Ensures text starts at the top
  },
});
