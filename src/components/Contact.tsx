import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

export default function ContactRow(props: any) {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate("ContactDetail")}
    >
      <View>
        <Text style={{ color: "teal", fontSize: 20 }}>
          {`${props.contact.firstName} ${props.contact.lastName}: \n${props.contact.phone}\n`}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
