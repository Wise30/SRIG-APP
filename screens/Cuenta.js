import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import ButtonGradients from '../Components/ButtonGradients';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../Firebase';

export default function Cuenta() {
    return ( 
        <ScrollView style = { styles.container } >
            <Text style = { styles.titulo }> Mi cuenta </Text> 
            <View style = {styles.subContainer }>
                <TextInput 
                    placeholder = "Nombre(s)" 
                    style = { styles.TextInput }/> 
                <TextInput 
                    placeholder = "Apellido(s)"
                    style = { styles.TextInput }/>
                <TextInput 
                    placeholder = "Cedula"
                    style = { styles.TextInput }/>
                <TextInput 
                    placeholder = "Correo"
                    style = { styles.TextInput }
                    />
                <TextInput 
                    placeholder = "Telefono"
                    style = { styles.TextInput }/>
            </View>
            <StatusBar style = "auto"/>
            <TouchableOpacity style = { styles.botones } showIcon> 
                <Ionicons name="notifications" size={24} color="black"/>
            </TouchableOpacity >
            <TouchableOpacity 
            onPress={() => FIREBASE_AUTH.signOut()}
            style = { styles.botones } showIcon> 
                <AntDesign name="logout" size={24} color="black" />
            </TouchableOpacity >
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        marginTop: 60,
    },
    subContainer: {
        alignItems: 'center',
    },
    titulo: {
        fontSize: 40,
        color: '#000',
        fontWeight: 'bold',
        paddingBottom: 30,
    },
    TextInput: {
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
    botones: {
        alignItems: 'center',
        margin: 10,
    }
});