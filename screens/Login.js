import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import ButtonGradient from '../ButtonGradient';
import { LinearGradient } from 'expo-linear-gradient';

const { width , height } = Dimensions.get('window')

export default function Login() {

  function SvgTop() {
    return (
    <Svg
        width={427}
        height={149}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
          d="M211.614 136.209a660.372 660.372 0 0 0 44.785-8.637c127.302-29.106 166.777-12.127 170.601 0V.466L-1 0v127.572c43.731-16.17 146.957-38.808 198.037 0 4.36 3.313 9.248 6.178 14.577 8.637Z"
          fill="#EBC500"
          fillOpacity={0.58}
        />
        <Path
          d="M427 127.572c-3.824-12.127-43.299-29.106-170.601 0a660.372 660.372 0 0 1-44.785 8.637c57.093 26.354 164.742 6.153 215.386-8.637Z"
          fill="#EBC500"
          fillOpacity={0.14}
        />
        <Path
          d="M197.037 127.572c-51.08-38.808-154.306-16.17-198.037 0 27.913 10.659 107.937 25.065 212.614 8.637-5.329-2.459-10.217-5.324-14.577-8.637Z"
          fill="#EBC500"
          fillOpacity={0.58}
        />
    </Svg>
    )
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop/>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Hola!</Text>
        <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>
        <TextInput 
          placeholder='juanita@email.com'
          //onChangeText={() => setEmail}
          style={styles.textInput}
          />
        <TextInput 
          placeholder='contraseña'
          //onChangeText={() => setPassword}
          style={styles.textInput}
          secureTextEntry={true}
          />
          <ButtonGradient/>
          <TouchableOpacity style={styles.forgotPassword}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#fcf7db', '#ebc500']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.button}
            >
                  <Text style={styles.text}>Registrarse</Text>
            </LinearGradient>
          </TouchableOpacity>
          <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#344340',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  }
});