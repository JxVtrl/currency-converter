import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function Input({
  placeholder = "",
  value = "",
  onChange = () => {},
  label = "",
  keyType = "default",
}) {
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
