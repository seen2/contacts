import React from "react";
import { Text, useWindowDimensions, TouchableOpacity } from "react-native";

export default function Button(props: {
  color: string;
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={{
        borderColor: "grey",
        borderRadius: 5,
        margin: 5,
        height: 30,
        backgroundColor: props.color || "red",
      }}
      onPress={props.onPress}
    >
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
