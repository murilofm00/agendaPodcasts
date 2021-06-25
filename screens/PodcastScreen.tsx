import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
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
      <View>
        <Text>Podcast</Text>
        <View>
          <FlatList
            data={episodios}
            renderItem={({ item }) => <EpisodioListItem episodio={item} />}
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
        <FAB
          title="➕"
          placement="right"
          onPress={() => navigation.navigate("Adicionar Episódio")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "500",
  },
});
