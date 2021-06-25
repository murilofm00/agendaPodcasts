import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import EpisodioForm from "../components/EpisodioForm";
import IEpisodio from "../models/IEpisodio";
import { auth, db } from "../plugins/firebase";

export default function AddUserScreen({ navigation }: { navigation: any }) {
  const userId = auth.currentUser?.uid;
  async function adicionarEpisodio(episodio: IEpisodio) {
    if (userId) {
      db.ref("episodios")
        .child(userId)
        .push(episodio)
        .then(() => navigation.navigate("Podcasts"));
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>Adicionar Episódio</Text>
      <EpisodioForm submit={adicionarEpisodio}></EpisodioForm>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    margin: 10,
    fontWeight: "500",
  },
});
