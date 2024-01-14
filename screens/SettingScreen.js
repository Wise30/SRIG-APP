import React from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {

    const navigation = useNavigation();

    return (
        <View
        style={styles.Botones}>
            <Text 
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Settings</Text>
            
            <TouchableOpacity
                onPress={() => navigation.navigate("Account")}
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
                    Cuenta
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
            <TouchableOpacity
                onPress={() => navigation.navigate("Beneficios")}
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
                    Beneficios
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Contacto")}
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
                    Contactanos
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingScreen;

const styles = StyleSheet.create({
    Botones: {
        marginTop: 150,
        marginLeft: 0,
    },
});