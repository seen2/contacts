import React from "react";
import { View, Text } from "react-native";
import { Contact } from "../contacts";

export default function ContactRow(props: { contact: Contact }) {
  return (
    <View>
      <Text style={{ color: "teal", fontSize: 20 }}>
        {`${props.contact.firstName} ${props.contact.lastName}: \n${props.contact.phone}\n`}
      </Text>
    </View>
  );
}
