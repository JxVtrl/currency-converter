import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { useApp } from "../../context/AppContext";

export default function SwapButton() {
  const { swapCurrencies } = useApp();
  return (
    <Icon reverse name="loop" type="foundation" onPress={swapCurrencies} />
  );
}
