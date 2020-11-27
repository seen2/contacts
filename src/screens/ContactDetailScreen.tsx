import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ContactDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "teal" }}>Contact Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
});
