import React from "react";
import { View, TextInput } from "react-native";
import Text from "@kaloraat/react-native-text";

export default function UserInput({
  name,
  value,
  setValue,
  autoCapitalize = "none",
  keyboardType = "default",
  secureTextEntry = false,
}) {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text semi color="brown">
        {name}
      </Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "purple",
          marginBottom: 30,
        }}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
}
