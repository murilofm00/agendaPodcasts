import React from "react";
import { Alert } from "react-native";
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
  function doLogin({ email, password }: ILogin) {
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      if (user) {
        Alert.alert("Usuário criado");
      }
    });
  }

  return (
    <SafeAreaView style={styles.loginScreen}>
      <View>
        <Text style={styles.titulo}>Cadastrar-se</Text>
      </View>
      <CardLogin buttonTitle="Login" submit={(login) => doLogin(login)} />
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
});
