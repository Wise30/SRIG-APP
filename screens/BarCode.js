import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const [cedula, setCedula] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validarCedula = async () => {
    try {
        const response = await fetch(`https://api.digital.gob.do/v3/cedulas/${scanData}/validate/`);
        const data = await response.json();
        setIsValid(data.valid);
    } catch (error) {
        console.error('Error al validar la cédula:', error);
    }
  };

  useEffect(() => {
    (async() => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({type, data}) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
  };



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Favor de tapar con su dedo el código QR</Text>
      <BarCodeScanner 
        style={styles.camera} // Aplicar el estilo de la cámara
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
      {scanData && <Button title='Scan Again?' onPress={() => setScanData(undefined)} />}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 60, padding: 5 }}
        onChangeText={text => setCedula(text)}
        value={scanData}
      />
      <Button title="Validar cédula" onPress={validarCedula} />
      {isValid && <Text style={{ marginTop: 10 }}>La cédula es válida</Text>}
      {!isValid && isValid !== null && <Text style={{ marginTop: 10 }}>La cédula no es válida</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 350, // Ancho deseado
    height: 250, // Altura deseada
    borderRadius: 10, // Bordes redondeados
    overflow: 'hidden', // Recortar cualquier parte de la cámara que esté fuera del contenedor
  },
  titulo: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});