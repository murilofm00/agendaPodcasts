import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import firebase, { auth } from "./plugins/firebase";
import AddEpisodioScreen from "./screens/AddEpisodioScreen";
import AddAmigoScreen from "./screens/AddAmigoScreen";
import LoginScreen from "./screens/LoginScreen";
import PodcastScreen from "./screens/PodcastScreen";
import UserScreen from "./screens/UserScreen";
import CriarUsuarioScreen from "./screens/CriarUsuario";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createStackNavigator();

export default function App() {
  const user = auth.currentUser;

  const [usuario, setUsuario] = useState<firebase.User | null>(user);

  auth.onAuthStateChanged((user) => {
    setUsuario(user);
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {usuario ? (
            <>
              <Stack.Screen
                name="Podcasts"
                component={PodcastScreen}
                options={({ navigation }) => {
                  return {
                    headerRight: () => (
                      <FontAwesome5
                        name="user-circle"
                        size={30}
                        style={{ margin: 7, marginRight: 15 }}
                        color="black"
                        onPress={() => navigation.navigate("Usuário")}
                      />
                    ),
                  };
                }}
              />
              <Stack.Screen name="Usuário" component={UserScreen} />
              <Stack.Screen
                name="Criar Usuário"
                component={CriarUsuarioScreen}
              />
              <Stack.Screen name="Adicionar Amigo" component={AddAmigoScreen} />
              <Stack.Screen
                name="Adicionar Episódio"
                component={AddEpisodioScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Sign Up" component={SignUpScreen} />
            </>
          )}
        </Stack.Navigator>
        <StatusBar></StatusBar>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
