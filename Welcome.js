import React from "react";
import { Text, View } from "react-native";

export default function Welcome({ name }) {
  return (
    <View>
      <Text>Hello {name} !</Text>
    </View>
  );
}
