import React from "react";
import { View, Text } from "react-native";

export default function Contact(props: any) {
  return (
    <View>
      <Text style={{ color: "teal" }}>
        {`${props.contact.firstName} ${props.contact.lastName}: \n${props.contact.phone}\n`}
      </Text>
    </View>
  );
}
