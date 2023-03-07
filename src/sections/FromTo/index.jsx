import React from "react";
import { StyleSheet, View } from "react-native";
import { useApp } from "../../context/AppContext";
import Select from "../../components/Select";
import SwapButton from "../../components/SwapButton";

export default function FromTo() {
  const { setFromCurrency, setToCurrency } = useApp();
  return (
    <View style={styles.fromToContent}>
      <Select label="From" placeholder="Set from" onChange={setFromCurrency} />
      <SwapButton />
      <Select label="To" placeholder="Set to" onChange={setToCurrency} />
    </View>
  );
}

const styles = StyleSheet.create({
  fromToContent: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    gap: 12,
  },
});
