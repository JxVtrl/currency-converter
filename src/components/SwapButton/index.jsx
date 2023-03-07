import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useApp } from "../../context/AppContext";

export default function SwapButton() {
  const { swapCurrencies } = useApp();
  return (
    <TouchableOpacity onPress={swapCurrencies}>
      <Icon reverse name="loop" type="foundation" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {},
});
