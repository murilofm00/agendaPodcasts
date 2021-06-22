import React from "react";
import { Button, SafeAreaView, Text, StyleSheet } from "react-native";
import { auth } from "../plugins/firebase";

export default function PodcastScreen() {
  return (
    <SafeAreaView style={styles.podcastScreen}>
      <Text>Podcast</Text>
      <Button title="Deslogar" onPress={() => auth.signOut()}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  podcastScreen: {
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
