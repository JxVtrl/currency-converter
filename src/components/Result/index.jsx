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
      {amountInput > 0 && fromCurrency && (
        <View>
          <Text>
            {amountInput} {fromCurrency.symbol} =
          </Text>
        </View>
      )}

      {amountResult > 0 && toCurrency && (
        <View>
          <Text>
            {amountResult} {toCurrency.symbol}
          </Text>
        </View>
      )}

      {amountResultInverted > 0 && toCurrency && fromCurrency && (
        <View>
          <Text>
            1 {toCurrency.symbol} = {amountResultInverted} {fromCurrency.symbol}
          </Text>
        </View>
      )}
    </View>
  );
}
