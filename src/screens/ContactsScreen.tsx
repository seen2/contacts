import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import ContactRow from "../components/Contact";
import getContact, { Contact } from "../contacts";
import { ContactsState } from "../redux/reducers/contactReducer";

export default function ContactsScreen(props: any) {
  const [toggleContact, setToggleContact] = useState(false);

  const contacts = useSelector<ContactsState, ContactsState["contacts"]>(
    (state) => state.contacts
  );

  return (
    <View style={styles.container}>
      <Button
        title="toggle contact"
        onPress={() => setToggleContact(!toggleContact)}
      />
      {!toggleContact && (
        <ScrollView>
          {getContact(100)
            .sort((a: Contact, b: Contact) => {
              if (a.firstName === b.firstName) return 0;
              else if (a.firstName > b.firstName) return 1;
              else return -1;
            })
            .map((contact) => (
              <ContactRow {...props} key={contact.key} contact={contact} />
            ))}
        </ScrollView>
      )}
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
