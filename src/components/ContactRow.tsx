import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContactRow(props: any) {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate("ContactDetail")}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ color: "teal", fontSize: 20 }}>
          {`${props.contact.firstName} ${props.contact.lastName}: \n${props.contact.phone}\n`}
        </Text>
        <Ionicons name={"ios-contact"} size={35} color={"teal"} />
      </View>
    </TouchableWithoutFeedback>
  );
}
