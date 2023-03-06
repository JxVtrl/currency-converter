import React from "react";
import Title from "../../components/Title";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Result from "../../components/Result";
import SwapButton from "../../components/SwapButton";
import { useApp } from "../../context/AppContext";
import { StyleSheet, View } from "react-native";

export default function Content() {
  const {
    amountInput,
    setAmountInput,
    fromCurrency,
    setFromCurrency,
    setToCurrency,
    toCurrency,
  } = useApp();

  return (
    <>
      <Title />
      <Modal>
        <Input
          label="Amount"
          placeholder="Set amount"
          keyType="numeric"
          onChangeText={setAmountInput}
          value={amountInput}
        />
        <View style={styles.fromToContent}>
          <Input
            label="From"
            placeholder="Set from"
            onChangeText={setFromCurrency}
            value={fromCurrency}
            type="select"
          />
          <SwapButton />
          <Input
            label="To"
            placeholder="Set to"
            onChangeText={setToCurrency}
            value={toCurrency}
            type="select"
          />
        </View>
        <View>
          <Result />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fromToContent: {},
});
