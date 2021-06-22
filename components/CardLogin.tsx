import React from "react";
import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Card, Input } from "react-native-elements";
import ILogin from "../models/ILogin";

export default function CardLogin({
  buttonTitle,
  submit,
}: {
  buttonTitle: string;
  submit: (login: ILogin) => void;
}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Card containerStyle={styles.cardLogin}>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        inputStyle={styles.input}
        autoCompleteType="email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        style={styles.input}
        autoCompleteType="password"
        textContentType="password"
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
      />
      <Button
        title={buttonTitle}
        onPress={() => {
          submit({ email: email, password: senha });
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardLogin: {
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
