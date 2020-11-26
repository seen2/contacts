import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ContactRow from "./src/components/Contact";
import getContact, { Contact } from "./src/contacts";

export default function App() {
  const [showContact, setShowContact] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Button title="Add Contact" color="teal" onPress={() => {}} />
        <Button
          title="Toggle Contact"
          color="teal"
          onPress={() => {
            setShowContact(!showContact);
          }}
        />
      </View>
      {showContact && (
        <ScrollView>
          {getContact(50)
            .sort((a: Contact, b: Contact) => {
              if (a.firstName === b.firstName) return 0;
              else if (a.firstName > b.firstName) return 1;
              else return -1;
            })
            .map((contact) => (
              <ContactRow key={contact.key} contact={contact} />
            ))}
        </ScrollView>
      )}
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
