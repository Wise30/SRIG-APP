import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from 'react-native-svg';

import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { FIREBASE_AUTH } from "../Firebase";

const width_screen = Dimensions.get('window').width;

const card_item = width_screen - 24 * 2;

const card_size = {
    width: 600,
    height: 373,
};

const LicenceScreen = () => {
    const navigation = useNavigation();
    const [imageUrl, setImageUrl] = useState('');
    const userID = FIREBASE_AUTH.currentUser.uid;

    useEffect(() => {
      const storage = getStorage();
      const imageRef = ref(storage, `images/licencia/${userID}.jpg`);
  
      getDownloadURL(imageRef)
        .then((url) => {
          // Set the image URL
          setImageUrl(url);
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error fetching image:", error);
        });
    }, []);
  
    return (
        <ScrollView>
                        <ImageBackground>
                <Svg
                        width={387}
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
                    <Text 
                        style={{
                        fontSize: 30,
                        textAlign: "center",
                        marginTop: "20%"
                    }}
                    >Licencia</Text>
                </Svg>
            </ImageBackground>  

            <Image
                style={styles.image}
                source={{
                uri: imageUrl
                }}
            />

            <Text style={styles.text} //Numero del colegio electoral
            >Cédula: 
            <Text style={styles.textdesc}
            > XXX-XXXXXXX-X</Text></Text>

            <Text style={styles.text} //Colegio de votación
            >Emisión: 
            <Text style={styles.textdesc}
            > 20/01/2020</Text></Text>

            <Text style={styles.text} //Direccion casa
            >Vence: 
            <Text style={styles.textdesc}
            > 25/01/2024</Text></Text>

            <Text style={styles.text} //Sector
            >Categoria: 
            <Text style={styles.textdesc}
            > 02 CONDUCTOR</Text></Text>

            <Text style={styles.text} //Municipio
            >Restricciones:  
            <Text style={styles.textdesc}
            > NINGUNA</Text></Text>
            <Image source={require('../assets/QR_Intrant.jpg')} style={styles.qr}></Image>
            <TouchableOpacity 
            onPress={() => navigation.navigate("cameraL")}
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
                    Modificar o agregar licencia
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default LicenceScreen;


const styles = StyleSheet.create({
    card: {
        width: card_item,
        height: (card_item * card_size.height) / card_size.width,
        marginTop: 20,
        margin: 25,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    textdesc: {
        fontSize: 15,
        fontWeight: 'normal',
    },
    qr: {
        width: 120,
        height: 110,
        marginLeft: "35%",
        marginTop: 10,
    },
});