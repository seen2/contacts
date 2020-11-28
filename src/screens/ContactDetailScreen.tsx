import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContactDetailScreen(props: any) {
  const {
    firstName,
    lastName,
    email,
    address,
    phone,
  } = props.route.params.contact;

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Ionicons name={"ios-contact"} size={100} color={"teal"} />
        <Text style={{ color: "teal", fontSize: 30, fontWeight: "bold" }}>
          {`${firstName} ${lastName}`}
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "teal",
          height: 100,
          paddingHorizontal: 5,
          borderRadius: 10,
          marginHorizontal: "1%",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#121212", fontSize: 20, fontWeight: "bold" }}>
          {`Phone: ${phone}`}
        </Text>
        <Text style={{ color: "#121212", fontSize: 20 }}>
          {`E-mail: ${email}`}
        </Text>
        <Text style={{ color: "#121212", fontSize: 20 }}>
          {`Address: ${address}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
});
