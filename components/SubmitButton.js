import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";

export default function SubmitButton({ title, handleSubmit, loading }) {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={{
        backgroundColor: "#ff9900",
        height: 50,
        marginBottom: 20,
        marginHorizontal: 15,
        borderRadius: 24,
        justifyContent: "center",
      }}>
      <Text bold medium center>
        {loading ? "Please wait..." : title}
      </Text>
    </TouchableOpacity>
  );
}
