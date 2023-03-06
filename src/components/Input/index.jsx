import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export default function Input({
  placeholder = "",
  value = "",
  onChange = () => {},
  label = "",
  keyType = "default",
  type = "text",
}) {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  if (type === "select") {
    return (
      <View>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            onChange(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
    );
  } else if (type === "text") {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value.toString()}
          onChangeText={onChange}
          keyboardType={keyType}
        />
      </View>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
