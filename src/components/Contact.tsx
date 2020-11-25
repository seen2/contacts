import React from "react";
import { View, Text } from "react-native";

interface Props {
  contact: { firstName: string; lastName: string; phone: number; key: number };
}

export default function Contact(props: Props) {
  return (
    <View>
      <Text style={{ color: "teal" }}>
        {`${props.contact.firstName} ${props.contact.lastName}: \n${props.contact.phone}\n`}
      </Text>
    </View>
  );
}
