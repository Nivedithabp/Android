import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      {/* Navigate to the Login screen */}
      <Button title="Login" onPress={() => navigation.navigate('Login')} />

      {/* Navigate to the SignUp screen */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.toggleText}>
          {"Don't have an account? Sign Up"}
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
  toggleText: {
    marginTop: 15,
    color: '#3b5998',
    textDecorationLine: 'underline',
  },
});
