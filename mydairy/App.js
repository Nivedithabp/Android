import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
const myImg = require('./assets/icon.png');

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Back</Text>
      </View>

      {/* Image */}
      <Image
        source={myImg}
        style={styles.mainImage}
      />

      {/* Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionText}>Tell us about your day</Text>
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Start"
          color="#841584"
          onPress={() => Alert.alert('Start blogging')}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Your Company</Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#6200ee',
    borderRadius: 10,
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
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 40,
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
    width: '60%',
    marginBottom: 30,
  },
  footer: {
    padding: 10,
    backgroundColor: '#6200ee',
    borderRadius: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});
