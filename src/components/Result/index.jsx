import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useApp } from "../../context/AppContext";

export default function Result() {
  const {
    fromCurrency,
    amountInput,
    toCurrency,
    amountResult,
    amountResultInverted,
  } = useApp();
  return (
    <View>
      {fromCurrency.name && (
        <View>
          <Text style={styles.amount}>
            {amountInput} {fromCurrency.name} =
          </Text>
        </View>
      )}

      {toCurrency.name && (
        <View>
          <Text style={styles.result}>
            {amountResult} {toCurrency.name}
          </Text>
        </View>
      )}

      {toCurrency.name && fromCurrency.name && (
        <View>
          <Text style={styles.resultInverted}>
            1 {toCurrency.symbol} = {amountResultInverted} {fromCurrency.symbol}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontSize: 18,
    color: "#5c667b",
    fontFamily: "Inter600",
    lineHeight: 18,
  },
  result: {
    fontSize: 30,
    color: "#2e3c57",
    fontFamily: "Inter600",
    lineHeight: 51,
  },
  resultInverted: {
    fontSize: 14,
    color: "#5c667b",
    fontFamily: "Inter400",
    lineHeight: 24,
  },
});
