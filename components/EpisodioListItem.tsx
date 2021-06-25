import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IEpisodio from "../models/IEpisodio";

export default function EpisodioListItem({
  episodio,
}: {
  episodio: IEpisodio;
}) {
  function anfitrioes() {
    return episodio.anfitrioes.map((anfitriao, index) => (
      <Text style={styles.li} key={index}>
        {" "}
        - {anfitriao}
      </Text>
    ));
  }

  function convidados() {
    return episodio.convidados.map((convidado, index) => (
      <Text style={styles.li} key={index}>
        {" "}
        - {convidado}
      </Text>
    ));
  }
  return (
    <View style={styles.listItem}>
      <Text style={styles.nome}>{episodio.podcast}</Text>
      <Text>Episodio: {episodio.episodio}</Text>
      <Text>Data: {episodio.data}</Text>
      <Text>Anfitrioes:</Text>
      {anfitrioes()}
      <Text>Convidados</Text>
      {convidados()}
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
  li: {
    fontSize: 10,
    color: "#989a9c",
    paddingLeft: 10,
  },
});
