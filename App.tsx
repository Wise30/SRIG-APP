import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./TypeScript/Login";
import Welcome from "./screens/welcome";
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./Firebase";
//import HomeScreen from "./screens/HomeScreen";

import HomeScreen from "./screens/HomeScreen";
//import Login from "../screens/Login";
import LicenceScreen from "./screens/LicenceScreen";
import SeguroScreen from "./screens/SeguroScreen";

//StackScreen views
import SettingScreen from "./screens/SettingScreen";
import Camera from "./screens/Camera";
import Cuenta from "./screens/Cuenta"; 
import Beneficios from "./screens/Beneficios";
import Contacto from "./screens/Contacto";
import Registro from "./screens/Registro";
import Account from "./screens/Account";
import camS from "./screens/camS";
import camaraC from "./screens/camaraC";
import cameraL from "./screens/cameraL";
import BarCode from "./screens/BarCode";

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//Cedula o Licencia
import { AntDesign } from '@expo/vector-icons';
//Seguro
import { FontAwesome5 } from '@expo/vector-icons';


//Se crea el Stack Navigator del Login para que este se muestre siempre de primero
const Stack = createNativeStackNavigator();

//El BottomTab Navigator es para todas las funciones de la app (Como cedula, licencia, seguro)
const Tab = createBottomTabNavigator();

//El HomeStack es para las aplicaciones que se encuentran en la pestaña de settings
const HomeStackNavigator = createNativeStackNavigator();

const CeduStackNavigator = createNativeStackNavigator();

export function ceduStack(){
    return (
        <CeduStackNavigator.Navigator
        >
            <CeduStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <CeduStackNavigator.Screen
                name="BarCode"
                component={BarCode}
                options={{ headerShown: false  }}
            />
        </CeduStackNavigator.Navigator>

    )
}

export function MyStack() {
    return (
        <HomeStackNavigator.Navigator
        >
            <HomeStackNavigator.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="Account"
                component={Account}
            />
            <HomeStackNavigator.Screen
                name="Cuenta"
                component={Cuenta}
                options={{ headerShown: false  }}
            />
            <HomeStackNavigator.Screen
                name="camS"
                component={camS}
                options={{ headerShown: false  }}
            />
            <HomeStackNavigator.Screen
                name="cameraL"
                component={cameraL}
                options={{ headerShown: false  }}
            />
            <HomeStackNavigator.Screen
                name="Beneficios"
                component={Beneficios}
            />
            <HomeStackNavigator.Screen
                name="Contacto"
                component={Contacto}
            />
        </HomeStackNavigator.Navigator>
    )
}


export function MyTabs() {
    return(
        //Botones de navegación abajo
        <Tab.Navigator
            initialRouteName="Home"
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
                    tabBarLabel: 'Configuración',
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

export function WelcomeLayout(){
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='Welcome'
        >
            <HomeStackNavigator.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false
                }}
          />
          <HomeStackNavigator.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <HomeStackNavigator.Screen
            name="Registro"
            component={Registro}
            options={{
              headerShown: false
            }}
          />
        </HomeStackNavigator.Navigator>
    );
  }
  

export default function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
        setUser(user);
    });
    }, []);
    return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
        {user ?
        <Stack.Screen name="Inside" component={MyTabs} options={{ headerShown: false  }} />
        : 
        <Stack.Screen name="WelcomeLayout" component={WelcomeLayout} options={{ headerShown: false  }} />
        }
    </Stack.Navigator>
    </NavigationContainer>
    );
};