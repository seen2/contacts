import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import ContactRow from "../components/ContactRow";
import { Store } from "../types/mainTypes";
import * as Types from "../types/contactTypes";
// import getContact, { Contact } from "../contacts";

export default function ContactsScreen(props: any) {
  const [toggleContact, setToggleContact] = useState(false);
  const data = useSelector<Store, Store["contacts"]>((state) => {
    return state.contacts;
  });
  const [contacts, setContacts] = useState<Types.Contact[]>(data);

  useEffect(() => {
    setContacts(data);

    return () => {};
  }, [data, contacts]);

  return (
    <View style={styles.container}>
      <Button
        title="toggle contact"
        onPress={() => setToggleContact(!toggleContact)}
      />
      {!toggleContact && (
        <ScrollView>
          {contacts
            .sort((a: Types.Contact, b: Types.Contact) => {
              if (a.firstName === b.firstName) return 0;
              else if (a.firstName > b.firstName) return 1;
              else return -1;
            })
            .map((contact: Types.Contact, index: number) => (
              <ContactRow
                navigation={props.navigation}
                key={index}
                contact={contact}
              />
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
