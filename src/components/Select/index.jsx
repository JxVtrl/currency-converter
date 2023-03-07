import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { useApp } from "../../context/AppContext";
import { Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";

export default function Select({
  placeholder = "",
  onChange = () => {},
  label = "",
}) {
  const { currencies, toCurrency, fromCurrency } = useApp();

  return (
    <View>
      <Text>{label}</Text>
      <SelectDropdown
        // search={true}
        searchPlaceHolder="Search"
        data={currencies.filter((currency) => {
          if (label === "From") return currency.symbol !== toCurrency.symbol;
          else if (label === "To")
            return currency.symbol !== fromCurrency.symbol;
          else return true;
        })}
        onSelect={(selectedItem) => onChange(selectedItem)}
        defaultButtonText={placeholder}
        buttonTextAfterSelection={(selectedItem) => selectedItem.name}
        rowTextForSelection={(item) => `${item.symbol} - ${item.name}`}
        buttonStyle={styles.selectButton}
        buttonTextStyle={styles.selectButtonTxt}
        rowStyle={styles.selectRow}
        rowTextStyle={styles.selectRowText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectButton: {
    width: "100%",
    marginTop: 8,
  },
  selectButtonTxt: {
    textAlign: "left",
  },
  selectRow: {
    width: "100%",
  },
  selectRowText: {
    textAlign: "left",
  },
});
