import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import IUsuario from "../models/IUsuario";

export default function UsuarioCard({ usuario }: { usuario: IUsuario }) {
  return (
    <Card>
      <View style={styles.avatarView}>
        <EvilIcons name="user" size={150} color="gray" />
      </View>
      <Text style={styles.nomeField}>{usuario.nome}</Text>
      <Text style={styles.cidadeField}>
        <MaterialIcons
          name="location-city"
          size={15}
          color="black"
          style={styles.icon}
        />
        Cidade: {usuario.cidade}
      </Text>
      <Text style={styles.emailField}>
        <MaterialIcons
          name="email"
          size={15}
          color="black"
          style={styles.icon}
        />
        Email: {usuario.email}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  avatarView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    minHeight: 100,
  },
  icon: {
    marginRight: 5,
  },
  nomeField: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 8,
  },
  cidadeField: {
    fontSize: 15,
  },
  emailField: {
    fontSize: 15,
  },
});
