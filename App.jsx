import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Content from "./src/sections/Content";
import { AppProvider } from "./src/context/AppContext";

export default function App() {
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
