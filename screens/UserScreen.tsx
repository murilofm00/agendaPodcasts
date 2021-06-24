import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import UsuarioCard from "../components/UsuarioCard";
import UsuarioListItem from "../components/UsuarioListItem";
import IUsuario from "../models/IUsuario";
import { auth, db } from "../plugins/firebase";

export default function UserScreen({ navigation }: { navigation: any }) {
  const [amigos, setAmigos] = useState<IUsuario[]>();
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    if (userId) {
      const getAmigos = db.ref("amigos")
        .child(userId)
        .on("value", (snap) => {
          var amigos: IUsuario[] = [];
          const val = snap.val();
          for (let amigoId in val) {
            amigos.push({ id: amigoId, ...val[amigoId] });
          }
          setAmigos(amigos);
        });

        return () => db.ref("amigos").child(userId).off('value', getAmigos);
      }    
  }, [amigos]);

  return (
    <SafeAreaView style={styles.userScreen}>
      <UsuarioCard
        usuario={{
          nome: "Murilo",
          email: "murilofm@unipam.edu.br",
          cidade: "Lagoa Formosa",
        }}
      />
      <View style={styles.deslogarButton}>
        <Button title="Deslogar" onPress={() => auth.signOut()}></Button>
      </View>
      <View style={styles.amigosDiv}>
        <View style={styles.flexRow}>
          <Text style={styles.titulo}>Amigos</Text>
          <AntDesign
            name="pluscircleo"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Adicionar Usuário")}
          />
        </View>
        <View>
          <FlatList
            data={amigos}
            renderItem={({ item }) => (
              <UsuarioListItem usuario={item}></UsuarioListItem>
            )}
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userScreen: {},
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "500",
    paddingRight: 20,
  },
  deslogarButton: {
    margin: 20,
  },
  amigosDiv: {
    marginHorizontal: 10,
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
  },
});
