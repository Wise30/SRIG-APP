import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import ButtonGradient from './ButtonGradient';

const { width , height } = Dimensions.get('window')

export default function App() {
  
  function SvgTop() {
    return (
      <Svg
        width={428}
        height={319}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M212.61 291.517c14.456-4.853 29.438-10.961 44.89-18.517 127.6-62.4 167.167-26 171 0V.5l-429-1V273c43.833-34.667 147.3-83.2 198.5 0 4.37 7.102 9.27 13.244 14.61 18.517Z"
          fill="#EBC500"
          fillOpacity={0.58}
        />
        <Path
          d="M428.5 273c-3.833-26-43.4-62.4-171 0-15.452 7.556-30.434 13.664-44.89 18.517C269.837 348.016 377.737 304.708 428.5 273Z"
          fill="#EBC500"
          fillOpacity={0.14}
        />
        <Path
          d="M198 273c-51.2-83.2-154.667-34.667-198.5 0 27.979 22.852 108.189 53.737 213.11 18.517-5.34-5.273-10.24-11.415-14.61-18.517Z"
          fill="#EBC500"
          fillOpacity={0.58}
        />
      </Svg>
    )
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop/>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Hola!</Text>
        <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>
        <TextInput 
          placeholder='juanita@email.com'
          style={styles.textInput}
          />
        <TextInput 
          placeholder='conttraseña'
          style={styles.textInput}
          secureTextEntry={true}
          />
          <Text style={styles.forgotPassword}>¿Tienes una cuenta?</Text>
          <ButtonGradient/>
          <StatusBar style="auto" />
      </View>
    </View>
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
  },
  button: {

  },
});
