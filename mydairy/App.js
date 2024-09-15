import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, Alert, SafeAreaView } from 'react-native';
import Navbar from './components/Navbar'; // Adjust the import path as necessary
import { Calendar } from 'react-native-calendars';
const myImg = require('./assets/icon.png');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome Back</Text>
        </View>

        {/* Image */}
        <Image source={myImg} style={styles.mainImage} />

        {/* Calendar */}
        <Calendar
          style={styles.calendar}
          // Add other calendar properties here if needed
          onDayPress={(day) => console.log('Selected day', day)}
        />

        {/* Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionText}>Tell us about your day</Text>
        </View>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button title="Start" color="#841584" onPress={() => Alert.alert('Start blogging')} />
        </View>
      </ScrollView>

      {/* Navbar */}
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 100, // Extra space to avoid overlap with the navbar
  },
  header: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 75,
    alignSelf: 'center',
  },
  calendar: {
    marginBottom: 30,
    borderRadius: 10,
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  buttonContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: '100%',
    paddingBottom: 20,
  },
});
