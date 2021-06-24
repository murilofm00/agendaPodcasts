import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Card, Input } from "react-native-elements";
import IUsuario from "../models/IUsuario";

export default function UsuarioForm({
  submit,
}: {
  submit: (usuario: IUsuario) => void;
}) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <Card containerStyle={styles.usuarioForm}>
      <Input
        placeholder="Nome"
        leftIcon={{ type: "font-awesome", name: "user" }}
        inputStyle={styles.input}
        onChangeText={(text) => setNome(text)}
      />
      <Input
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        inputStyle={styles.input}
        autoCompleteType="email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Cidade"
        leftIcon={{ type: "font-awesome-5", name: "city" }}
        style={styles.input}
        onChangeText={(text) => setCidade(text)}
      />
      <Button
        title="Salvar"
        onPress={() => {
          submit({ nome: nome, cidade: cidade, email: email });
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  usuarioForm: {
    padding: 5,
    minWidth: 300,
  },
  input: {
    margin: 7,
    // width: 250,
    // flex: 1,
    // flexDirection: "column",
    // width: "auto",
  },
});
