import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonGradient () {
    return (
        <TouchableOpacity name='Login' 
            onPress={() => { }}
            style={styles.container}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#ebc500', '#fcf7db']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.button}
            >
                <Text style={styles.text}>Iniciar Sesion</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        width: 200,
        marginTop: 10,
    },
    text: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})