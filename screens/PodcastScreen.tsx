import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import EpisodioListItem from "../components/EpisodioListItem";
import IEpisodio from "../models/IEpisodio";
import { auth, db } from "../plugins/firebase";

export default function PodcastScreen({ navigation }: { navigation: any }) {
  const userId = auth.currentUser?.uid;
  const [episodios, setEpisodios] = useState<IEpisodio[]>([]);

  useEffect(() => {
    if (userId) {
      const getEpisodios = db
        .ref("episodios")
        .child(userId)
        .on("value", (snap) => {
          var episodios: IEpisodio[] = [];
          const val = snap.val();
          for (let epId in val) {
            episodios.push({ id: epId, ...val[epId] });
          }
          setEpisodios(episodios);
        });

      return () => db.ref("episodios").child(userId).off("value", getEpisodios);
    }
  }, [episodios]);

  return (
    <SafeAreaView>
      <View style={styles.podcastScreen}>
        <View>
          <FlatList
            data={episodios}
            renderItem={({ item }) => <EpisodioListItem episodio={item} />}
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
        <AntDesign
          name="pluscircleo"
          size={30}
          color="primary"
          style={styles.addButton}
          onPress={() => navigation.navigate("Adicionar Episódio")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  podcastScreen: {
    margin: 10,
    paddingBottom: 65,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "500",
  },
  addButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
});
