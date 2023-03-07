import { StyleSheet, Button, View } from "react-native";
import React from "react";
import Title from "../../components/Title";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Result from "../../components/Result";

import FromTo from "../FromTo";
import { useApp } from "../../context/AppContext";

export default function Content() {
  const { amountInput, setAmountInput, convertCurrency } = useApp();

  return (
    <>
      <Title />
      <Modal>
        <View>
          <Input
            label="Amount"
            placeholder="Set amount"
            keyType="numeric"
            onChange={setAmountInput}
            value={amountInput}
          />
          <FromTo />
          <Result />
        </View>
        <Button
          title="Convert"
          onPress={convertCurrency}
          style={styles.convertBtn}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fromToContent: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  convertBtn: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "flex-end",
  },
});
