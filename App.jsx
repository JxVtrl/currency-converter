import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Content from "./src/sections/Content";
import { AppProvider } from "./src/context/AppContext";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Inter100: require("./assets/fonts/Inter/Inter-100.ttf"),
    Inter200: require("./assets/fonts/Inter/Inter-200.ttf"),
    Inter300: require("./assets/fonts/Inter/Inter-300.ttf"),
    Inter400: require("./assets/fonts/Inter/Inter-400.ttf"),
    Inter500: require("./assets/fonts/Inter/Inter-500.ttf"),
    Inter600: require("./assets/fonts/Inter/Inter-600.ttf"),
    Inter700: require("./assets/fonts/Inter/Inter-700.ttf"),
    Inter800: require("./assets/fonts/Inter/Inter-800.ttf"),
    Inter900: require("./assets/fonts/Inter/Inter-900.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <Content />
      </SafeAreaView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
});
