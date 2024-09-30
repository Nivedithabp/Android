import {FunctionComponent, useEffect, useState} from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity,Button, View} from "react-native";
import {auth} from "../firebase";
import {useNavigation} from "@react-navigation/core";
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigation.navigate('Home')
    //         }
    //     })

    //     return unsubscribe
    // }, [])

    // const handleSignUp = () => {
    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(userCreds => {
    //             const user = userCreds.user;
    //             console.log('Registered with: ', user?.email);
    //         })
    //         .catch(error => alert(error.message))

    // }
    // Inside handleSignUp
// const handleSignUp = () => {
//     auth
//         .createUserWithEmailAndPassword(email, password)
//         .then(userCreds => {
//             const user = userCreds.user;
//             console.log('Registered with: ', user?.email);
            
//             // Store user data in Firestore
//             firestore()
//                 .collection('users')
//                 .doc(user?.uid)
//                 .set({
//                     email: user?.email,
//                     name: "User's Name",  // Add logic to get the name from the user input
//                 })
//                 .then(() => {
//                     console.log('User data added to Firestore');
//                 });

//             // Store user data locally
//             AsyncStorage.setItem('userEmail', user.email);
//             AsyncStorage.setItem('userName', "User's Name");
//         })
//         .catch(error => alert(error.message));
// }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCrds => {
                const user = userCrds.user;
                console.log('LoggedIn with: ', user?.email);
                navigation.replace("Home");
            })
            .catch(error => alert(error.message))
    };


    return (
        <View style={styles.container}>
          <Text style={styles.header}>Login</Text>
          <TextInput 
            placeholder="Email" 
            value={email} 
            onChangeText={setEmail} 
            style={styles.input} 
          />
          <TextInput 
            placeholder="Password" 
            value={password} 
            onChangeText={setPassword} 
            style={styles.input} 
            secureTextEntry 
          />
          <Button title="Login" onPress={handleLogin} />
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Button 
            title="Sign Up" 
            onPress={() => navigation.navigate('SignUp')} 
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 4,
      },
      signupText: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
    });
    
    export default LoginScreen;