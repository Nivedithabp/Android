import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/Landing';
import SignUp from './components/SignUp'; // Import SignUp screen
import Login from './components/Login'; // Import Login screen
import Home from './components/Home'; // Import Home screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing" 
          component={Landing} 
          options={{ headerShown: false }} // Hide header for Landing screen
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: true, title: 'Sign Up' }} // Show header for SignUp screen
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: true, title: 'Login' }} // Show header for Login screen
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: true, title: 'Home' }} // Show header for Home screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
