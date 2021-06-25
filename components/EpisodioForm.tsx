import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Card, Input } from "react-native-elements";
import IEpisodio from "../models/IEpisodio";

export default function EpisodioForm({
  submit,
}: {
  submit: (episodio: IEpisodio) => void;
}) {
  const [podcast, setPodcast] = useState<string>("");
  const [episodio, setEpisodio] = useState<number>();
  const [anfitrioes, setAnfitrioes] = useState<string>("");
  const [convidados, setConvidados] = useState<string>("");
  const [data, setData] = useState<string>("");

  function salvar() {
    const episodioObj: IEpisodio = {
      podcast: podcast,
      episodio: episodio || 0,
      anfitrioes: anfitrioes.split("\n"),
      convidados: convidados.split("\n"),
      data: data,
    };
    submit(episodioObj);
  }

  return (
    <Card containerStyle={styles.usuarioForm}>
      <Input
        placeholder="Podcast"
        leftIcon={{ type: "font-awesome", name: "microphone" }}
        inputStyle={styles.input}
        onChangeText={(text) => setPodcast(text)}
      />
      <Input
        placeholder="Episodio"
        leftIcon={{ type: "font-awesome", name: "headphones" }}
        inputStyle={styles.input}
        onChangeText={(text) => setEpisodio(parseInt(text))}
      />
      <Input
        placeholder="Anfitriões (separe por linha)"
        multiline={true}
        numberOfLines={4}
        leftIcon={{ type: "font-awesome-5", name: "cannabis" }}
        style={styles.input}
        onChangeText={(text) => setAnfitrioes(text)}
      />
      <Input
        placeholder="Convidados (separe por linha)"
        multiline={true}
        numberOfLines={4}
        leftIcon={{ type: "font-awesome-5", name: "beer" }}
        style={styles.input}
        onChangeText={(text) => setConvidados(text)}
      />
      <Input
        placeholder="Data"
        leftIcon={{ type: "font-awesome-5", name: "calendar" }}
        style={styles.input}
        onChangeText={(text) => setData(text)}
      />
      <Button title="Salvar" onPress={salvar} />
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
  },
});
