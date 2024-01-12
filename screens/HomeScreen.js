import React from 'react';
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

const width_screen = Dimensions.get('window').width;

const card_item = width_screen - 24 * 2;
/*
const qr_item = width_screen - 24 * 2;

const qr_size = {
    width: 110,
    height: 100,
};*/

const card_size = {
    width: 616,
    height: 405,
};

const card_size_2 = {
    width: 1237,
    height: 780,
};

const HomeScreen = () => {

    const navigation = useNavigation();

    return(
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
                    }}> Cédula </Text>
                </Svg>
            </ImageBackground>                
            <Image
                source={require('../assets/cedula.png')}
                style={styles.card}>
            </Image>
            <Image
                source={require('../assets/Cedula_trasera.jpg')}
                style={styles.card_2}>
            </Image>

            <Text style={styles.text} //Numero del colegio electoral
            >Colegio Electoral: 
            <Text style={styles.textdesc}
            > XXXX</Text></Text>

            <Text style={styles.text} //Colegio de votación
            >Ubicación del Colegio: 
            <Text style={styles.textdesc}
            > XXXXXX XXXXXX XXXXXX XXXXX XXXX</Text></Text>

            <Text style={styles.text} //Direccion casa
            >Dirección de Residencia: 
            <Text style={styles.textdesc}
            > XX XXXXX XX</Text></Text>

            <Text style={styles.text} //Sector
            >Sector: 
            <Text style={styles.textdesc}
            > XXXXXXXX</Text></Text>

            <Text style={styles.text} //Municipio
            >Municipio:  
            <Text style={styles.textdesc}
            > LA VEGA</Text></Text>
            <Image source={require('../assets/QR.jpg')} style={styles.qr}></Image>


            <TouchableOpacity 
            onPress={() => navigation.navigate("Camera")}
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
                    Modificar o agregar cédula
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

//Antiguo codigo de la pantalla de inicio
/*    return (
    )
}*/

export default HomeScreen;

const styles = StyleSheet.create({
    card: {
        width: card_item,
        height: (card_item * card_size.height) / card_size.width,
        marginTop: 20,
        marginLeft: 25,
    },
    card_2: {
        width: card_item,
        height: (card_item * card_size_2.height) / card_size_2.width,
        marginLeft: 25,
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