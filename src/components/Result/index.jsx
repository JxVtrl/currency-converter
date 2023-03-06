import React from "react";
import { Text, View } from "react-native";
import { useApp } from "../../context/AppContext";

export default function Result() {
  const {
    fromCurrency,
    amountCurrency,
    amountInput,
    toCurrency,
    amountResult,
    amountResultInverted,
  } = useApp();
  return (
    <View>
      <View>
        <Text>
          {amountInput} {fromCurrency} =
        </Text>
      </View>

      <View>
        <Text>
          {amountResult} {toCurrency}
        </Text>
      </View>

      <View>
        <Text>
          1 {toCurrency} = {amountResultInverted} {fromCurrency}
        </Text>
      </View>
    </View>
  );
}
