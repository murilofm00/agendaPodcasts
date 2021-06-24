import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IUsuario from "../models/IUsuario";

export default function UsuarioListItem({ usuario }: { usuario: IUsuario }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.nome}>{usuario.nome}</Text>
      <Text>E-mail: {usuario.email}</Text>
      <Text>Cidade: {usuario.cidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,

    backgroundColor: "white",

    padding: 5,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  nome: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: "500",
  },
});
