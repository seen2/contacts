import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Contact from "./src/components/Contact";

import getContact from "./src/contacts";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, color: "white" }}>Contacts</Text>
      <ScrollView>
        {getContact(100).map((contact) => (
          <Contact key={contact.key} contact={contact} />
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
    padding: 10,
  },
});
