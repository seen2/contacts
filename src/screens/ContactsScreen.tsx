import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

import ContactRow from "../components/Contact";
import getContact, { Contact } from "../contacts";

export default function ContactsScreen(props: any) {
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {getContact(5)
          .sort((a: Contact, b: Contact) => {
            if (a.firstName === b.firstName) return 0;
            else if (a.firstName > b.firstName) return 1;
            else return -1;
          })
          .map((contact) => (
            <ContactRow {...props} key={contact.key} contact={contact} />
          ))}
      </ScrollView>
      <StatusBar style="light" backgroundColor="#121212" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    paddingVertical: 10,
  },
});
