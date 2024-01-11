import React from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text 
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Settings</Text>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{
                    backgroundColor: "#F3DE6B",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                }}
            >  
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Ir a Iniciar Sesion
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Cuenta")}
                style={{
                    backgroundColor: "#F3DE6B",
                    padding: 10,
                    marginTop: "5%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                }}
            >  
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    Modificar cuenta
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingScreen;