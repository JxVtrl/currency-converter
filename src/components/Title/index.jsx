import React from "react";
import { View, Text } from "react-native";
import { useApp } from "../../context/AppContext";

export default function Title() {
  const { toCurrency, fromCurrency } = useApp();

  return (
    <View>
      {toCurrency.name && fromCurrency.name && (
        <Text>
          {fromCurrency.name} to {toCurrency.name}
        </Text>
      )}
    </View>
  );
}
