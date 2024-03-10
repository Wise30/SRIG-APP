import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Platform,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import Colors from "../Components/colors";
  import { Feather } from "@expo/vector-icons";
  import { FIREBASE_AUTH, FIRESTORE_DB } from "../Firebase";
  import { Entypo } from "@expo/vector-icons";
  import { signInWithEmailAndPassword } from "firebase/auth";
import { MyTabs } from "../App";
  
  const { width, height } = Dimensions.get("window");
  let top;
  if (Platform.OS === "ios") {
    top = height * 0.02;
  } else {
    top = 0;
  }
  
  export default function Login({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<any>("");
    const [loading, setLoading] = useState<boolean>(false);
  
    const handleSignin = async () => {
      setLoading(true);
      await
      signInWithEmailAndPassword(FIREBASE_AUTH, email.trim(), password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);
          alert("Inicio de sesión exitoso :)");
          navigation.navigate(MyTabs);
        })
        .catch((err: any) => {
          alert(err.meassage);
        });
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.loginHeaderText}>Inicia Sesión ! 🚀</Text>
        </View>
  
        <View style={styles.loginContainer}>
          {/* Email */}
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Correo</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Introduce tu correo"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {/* Password */}
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Contraseña</Text>
            <TextInput
              style={styles.passwordInput}
              placeholder="Introduce tu contraseña"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          {/* Forgot Password */}
          <View style={styles.forgotContainer}>
            <TouchableOpacity onPress={() => navigation.push("Forgot")}>
              <Text style={styles.forgotText}>Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </View>
          {/* Login Button */}
          <View style={styles.loginButton}>
            <TouchableOpacity onPress={handleSignin}>
              <Text style={styles.loginButtonText}>
                {
                  loading ? "Loading" : "Login"
                }
              </Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.signupGroup}>
            <Text style={styles.new}>Nuevo aquí?</Text>
            <TouchableOpacity onPress={() => navigation.push("Details")}>
              <Text style={styles.signup}>Registrate!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 15,
      marginTop: height * 0.05,
    },
    arrowContainer: {
      width: 40,
      height: 40,
      borderTopLeftRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: Colors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    loginHeader: {
      marginTop: 20,
    },
    loginHeaderText: {
      fontSize: 36,
      fontWeight: "bold",
    },
    loginContainer: {
      marginTop: 20,
    },
    emailContainer: {
      marginTop: 20,
    },
    emailText: {
      fontSize: 20,
      fontWeight: "bold",
    },
    emailInput: {
      marginTop: 10,
      width: "100%",
      height: 50,
      backgroundColor: Colors.light,
      borderWidth: 1,
      borderColor: Colors.light,
      borderRadius: 8,
      paddingLeft: 10,
    },
    passwordContainer: {
      marginTop: 20,
    },
    passwordText: {
      fontSize: 20,
      fontWeight: "bold",
    },
    passwordInput: {
      marginTop: 10,
      width: "100%",
      height: 50,
      backgroundColor: Colors.light,
      borderRadius: 8,
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: Colors.light,
    },
    forgotContainer: {
      marginTop: 20,
      alignItems: "flex-end",
    },
    forgotText: {
      fontSize: 16,
      fontWeight: "bold",
      color: Colors.deep,
    },
    loginButton: {
      marginTop: 20,
      width: "100%",
      height: 50,
      backgroundColor: Colors.secondary,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    loginButtonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: Colors.white,
    },
    signupGroup: {
      flexDirection: "row",
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    signup: {
      color: Colors.deep,
      fontSize: 16,
      fontWeight: "bold",
      marginRight: 5,
    },
    new: {
      fontSize: 16,
      fontWeight: "500",
      marginRight: 5,
      fontWeight: "bold"
    },
  });