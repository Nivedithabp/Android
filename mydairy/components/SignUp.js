import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp({ navigation }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    birthdate: new Date(),
    country: '',
    gender: '',
    biography: '',
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
      // Firebase signup with email and password
      const userCredential = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
      const user = userCredential.user;

      // Optionally store other user data locally or in the cloud

      Alert.alert('Sign Up Successful!', 'You can now log in.');
      navigation.navigate('Login'); // Navigate to login screen
    } catch (error) {
      console.error('Sign Up Error:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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

        <View style={styles.dateInputContainer}>
          <TextInput
            placeholder="Birth date DD/MM/YYYY"
            style={styles.dateInput}
            value={formData.birthdate.toDateString()}
            editable={false}
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.iconContainer}>
            <Icon name="calendar" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={formData.birthdate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

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
