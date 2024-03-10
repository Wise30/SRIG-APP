import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Colors from "../Components/colors";
import { Feather } from "@expo/vector-icons";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../Firebase";
import { Entypo } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const { width, height } = Dimensions.get("window");
let top;
if (Platform.OS === "ios") {
  top = height * 0.02;
} else {
  top = 0;
}

export default function Signup({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [username, setUsername] = useState<string>("");
  const [userLastName, setUserLastName] = useState<string>("");
  const [cedula, setcedula] = useState<number | string>("");
  const [estado, setEstado] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(FIREBASE_AUTH, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setDoc(doc(FIRESTORE_DB, "users", user.uid), {
          Nombre: username,
          Apellido: userLastName,
          Correo: email,
          Cedula: cedula,
          CreatedAt: new Date().toUTCString(),
        });
      })
      .then(() => alert("account created successfully 🎉"))
      .catch((err: any) => {
        alert(err.meassage);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>Sign up now 🎉</Text>
      </View>

      <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>
        {/* Username */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Nombre</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Coloca tu nombre"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        {/* UserLastName */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Apellido</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Coloca tu apellido"
            value={userLastName?.toString()}
            onChangeText={(text) => setUserLastName(text)}
          />
        </View>
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
        {/* Cédula */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Cédula</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Coloca tu cédula"
            value={cedula?.toString()}
            keyboardType="numeric"
            onChangeText={(text) => setcedula(text)}
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

        {/* Login Button */}
        <View style={styles.loginButton}>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.loginButtonText}>
              {loading ? "Creando cuenta..." : "Crear cuenta"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupGroup}>
          <Text style={styles.new}>Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.push("Login")}>
            <Text style={styles.signup}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    fontSize: 16,
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
    fontSize: 16,
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
    color: Colors.primary,
  },
  loginButton: {
    marginTop: 20,
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
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
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  new: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
});