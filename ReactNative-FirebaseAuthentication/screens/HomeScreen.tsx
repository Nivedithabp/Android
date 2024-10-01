import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, PanResponder } from 'react-native';
import { auth } from './../firebase'; // Ensure the firebase config is correct
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const userEmail = auth.currentUser?.email;

    // Animation references
    const opacityAnim = useRef(new Animated.Value(0)).current; // Animation for opacity

    // Gesture position
    const pan = useRef(new Animated.ValueXY()).current;

    // PanResponder for gestures
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [null, { dx: pan.x, dy: pan.y }],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: () => {
            // Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        },
    });

    // Load the user’s name from AsyncStorage and trigger animation
    useEffect(() => {
        const loadUserName = async () => {
            try {
                const name = await AsyncStorage.getItem('userName');
                if (name) {
                    setUserName(name);
                    // Start the opacity animation once name is loaded
                    Animated.timing(opacityAnim, {
                        toValue: 1,
                        duration: 2000,
                        useNativeDriver: true,
                    }).start();
                }
            } catch (error) {
                console.log('Error loading user name:', error);
            }
        };
        loadUserName();
    }, []);

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((error) => alert(error.message));
    };

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, { opacity: opacityAnim }]}>Name: {userName}</Animated.Text>
            <Text style={styles.text}>Email: {userEmail}</Text>
           
            {/* Gesture object */}
            <Animated.View
                {...panResponder.panHandlers}
                style={[styles.gestureBox, { transform: pan.getTranslateTransform() }]}
            >
                <Text style={styles.gestureText}>Drag me!</Text>
            </Animated.View>

            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    gestureBox: {
        width: 100,
        height: 100,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 20,
    },
    gestureText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
