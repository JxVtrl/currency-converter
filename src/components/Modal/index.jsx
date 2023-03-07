import React from "react";
import { StyleSheet, View } from "react-native";

export default function Modal({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "space-between",
    overflow: "hidden",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
});
