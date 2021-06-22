import React from "react";
import { Button, SafeAreaView, Text, StyleSheet } from "react-native";
import { auth } from "../plugins/firebase";

export default function UserScreen() {
  return (
    <SafeAreaView style={styles.userScreen}>
      <Text>Usuario</Text>
      <Button title="Deslogar" onPress={() => auth.signOut()}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userScreen: {},
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "500",
  },
});
