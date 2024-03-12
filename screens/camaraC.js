import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { listFiles, uploadToFirebase } from "../Firebase";
import { useState, useEffect } from "react";
import { FIREBASE_APP, FIREBASE_AUTH} from "../Firebase";


export default function App() {
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    listFiles().then((listResp) => {
      const files = listResp.map((value) => {
        return { name: value.fullPath };
      });

      setFiles(files);
    });
  }, []);

  console.log(files);

  /**
   *
   */
  const takePhoto = async () => {
    try {
      const cameraResp = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
      });

      if (!cameraResp.canceled) {
        const { uri } = cameraResp.assets[0];
        const userId = FIREBASE_AUTH.currentUser.uid; // Obtener el ID del usuario actual
        const fileName = `${userId}.jpg`; // Nombre de archivo con el ID del usuario y una marca de tiempo para asegurar que sea único
        const uploadResp = await uploadToFirebase(uri, `cedula/${fileName}`, (v) =>
          console.log(v)
        );
        console.log(uploadResp);

        listFiles().then((listResp) => {
          const files = listResp.map((value) => {
            return { name: value.fullPath };
          });

          setFiles(files);
        });
      }
    } catch (e) {
      Alert.alert("Error Uploading Image " + e.message);
    }
  };

  // permission check
  if (permission?.status !== ImagePicker.PermissionStatus.GRANTED) {
    return (
      <View style={styles.container}>
        <Text>Permission Not Granted - {permission?.status}</Text>
        <StatusBar style="auto" />
        <Button title="Request Permission" onPress={requestPermission}></Button>
      </View>
    );
  }

  // main UI
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Button title="Take Picture" onPress={takePhoto}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});