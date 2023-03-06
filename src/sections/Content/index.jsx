import React from "react";
import Title from "../../components/Title";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import SwapButton from "../../components/SwapButton";
import { useApp } from "../../context/AppContext";
import { StyleSheet, View } from "react-native";

export default function Content() {
  const {
    amountInput,
    setAmountInput,
    fromInput,
    setFromInput,
    setToInput,
    toInput,
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
            onChangeText={setFromInput}
            value={fromInput}
          />
          <SwapButton />
          <Input
            label="To"
            placeholder="Set to"
            onChangeText={setToInput}
            value={toInput}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fromToContent: {},
});
