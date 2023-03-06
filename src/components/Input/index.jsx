import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Dropdown from "react-native-input-select";

export default function Input({
  placeholder = "",
  value = "",
  onChangeText = () => {},
  label = "",
  keyType = "default",
  type = "text",
}) {
  const [country, setCountry] = React.useState();
  if (type === "select") {
    return (
      <View>
        <Dropdown
          label="Country"
          placeholder="Select an option..."
          options={[
            { name: "Albania", code: "AL" },
            { name: "Åland Islands", code: "AX" },
            { name: "Algeria", code: "DZ" },
            { name: "American Samoa", code: "AS" },
            { name: "Andorra", code: "AD" },
            { name: "Angola", code: "AO" },
            { name: "Anguilla", code: "AI" },
            { name: "Antarctica", code: "AQ" },
            { name: "Antigua and Barbuda", code: "AG" },
          ]}
          optionLabel={"name"}
          optionValue={"code"}
          selectedValue={country}
          onValueChange={(value) => value && setCountry(value)}
          primaryColor={"green"}
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
          onChangeText={onChangeText}
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
