import React from "react";
import { View, TextInput, useWindowDimensions, Text } from "react-native";

export default function LoginScreen(props: any) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ margin: 5 }}>
      <Text style={{ fontSize: 20, color: "white" }}>{props.title}</Text>
      <TextInput
        style={{
          width: width - 10,
          borderRadius: 5,

          height: 38,
          backgroundColor: "#322f3d",
          color: "white",
        }}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={"grey"}
        {...props}
      />
    </View>
  );
}
