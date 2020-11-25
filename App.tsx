import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import getContact from "./src/contacts";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, color: "white" }}>Contacts</Text>
      <ScrollView>
        {getContact(100).map((contact) => (
          <Text
            key={contact.key}
            style={{ color: "teal" }}
          >{`${contact.firstName} ${contact.lastName}: \n${contact.phone}\n`}</Text>
        ))}
      </ScrollView>
      <StatusBar style="light" backgroundColor="black" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    padding:10
  },
});
