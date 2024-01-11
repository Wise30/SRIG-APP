import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ButtonGradients() {
    return ( 
        <TouchableOpacity style = { styles.container } >
            <LinearGradient colors = {['#4c669f', '#3b5998', '#192f6a']}
                style = { styles.button } >
            </LinearGradient > 
            <Ionicons name = 'notifications'
                style = { styles.notifications }/>
            <AntDesign name = 'logout'
                style = { styles.logout }/>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    notifications: {
        backgroundColor: 'white',
        width: '30%',
        height: '30%',
        borderRadius: 20,
        padding: 20,
        marginTop: 30,

    },
    logout: {
        backgroundColor: 'white',
        width: '30%',
        height: '30%',
        borderRadius: 20,
        padding: 20,
        marginTop: 30,

    }
})