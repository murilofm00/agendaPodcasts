import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import firebase, { auth } from "./plugins/firebase";
import LoginScreen from "./screens/LoginScreen";
import PodcastScreen from "./screens/PodcastScreen";
import UserScreen from "./screens/UserScreen";

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
                options={({  navigation  }) => {
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
                ;
                }}
              />
              <Stack.Screen name="Usuário" component={UserScreen}  />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Sign Up" component={LoginScreen} />
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
