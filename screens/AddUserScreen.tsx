import React from "react";
import { StyleSheet, View } from "react-native";
import UsuarioForm from "../components/UsuarioForm";
import IUsuario from "../models/IUsuario";
import { auth, db } from "../plugins/firebase";

export default function AddUserScreen({ navigation }: { navigation: any }) {
  const userId = auth.currentUser?.uid;
  async function salvarUsuario(usuario: IUsuario) {
    if (userId) {
      db.ref("amigos")
        .child(userId)
        .push(usuario)
        .then(() => navigation.navigate("Usuário"));
    }
  }

  return (
    <View>
      <UsuarioForm submit={salvarUsuario}></UsuarioForm>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "500",
  },
});
