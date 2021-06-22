import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardLogin from "../components/CardLogin";
import ILogin from "../models/ILogin";
import { auth } from "../plugins/firebase";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [erro, setErro] = useState();

  function doLogin({ email, password }: ILogin) {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setErro(error.message);
    });
  }

  return (
    <SafeAreaView style={styles.loginScreen}>
      <View>
        <Text style={styles.titulo}>Login</Text>
      </View>
      <CardLogin buttonTitle="Login" submit={(login) => doLogin(login)} />
      <Text style={styles.erro}>{erro || ""}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={styles.signUpLink}>Criar conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "500",
  },
  erro: {
    color: "red",
    textAlign: "center",
  },
  signUpLink: {
    margin: 20,
    color: "gray",
    textDecorationLine: "underline",
  },
});
