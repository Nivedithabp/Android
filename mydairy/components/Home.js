import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from './../firebase';  // Import Firebase auth

export default function Home({ navigation }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser; // Get the currently signed-in user
    if (currentUser) {
      // If the user has a displayName, use it. Otherwise, use their email.
      const nameToDisplay = currentUser.displayName ? currentUser.displayName : currentUser.email;
      setUserName(nameToDisplay);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();  // Firebase sign out
      navigation.navigate('Landing');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
