import React from "react";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import Login from "../screens/Login";
import ActaScreen from "../screens/ActaScreen";
import LicenceScreen from "../screens/LicenceScreen";
import SeguroScreen from "../screens/SeguroScreen";
import Cuenta from "../screens/Cuenta";

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//Cedula o Licencia
import { AntDesign } from '@expo/vector-icons';
//Acta de nacimiento
import { Entypo } from '@expo/vector-icons';
//Seguro
import { FontAwesome5 } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="SettingScreen"
        >
            <HomeStackNavigator.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="Login"
                component={Login}
            />
            <HomeStackNavigator.Screen
                name="Cuenta"
                component={Cuenta}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        //Botones de navegación abajo
        <Tab.Navigator
            initialRouteName="Login"
            screenOptions= {{
                tabBarActiveBackgroundColor: '#F3DE6B',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Acta"
                component={ActaScreen}
                options={{
                    tabBarLabel: 'Acta',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="text-document" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Licence"
                component={LicenceScreen}
                options={{
                    tabBarLabel: 'Licencia',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="idcard" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Seguro"
                component={SeguroScreen}
                options={{
                    tabBarLabel: 'Seguro',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="hand-holding-medical" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Settings"
                component={MyStack}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={24} color={color} />                
                    ),
                    tabBarBadge: 1,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}


export default function navigation(){
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
