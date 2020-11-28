import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

import Input from "../components/Input";
import Button from "../components/Button";
import { addContact, contact } from "../redux/actions/contactActions";

export default function AddContactScreen() {
  const [firstName, setFirstName] = useState<string>("" as string);
  const [lastName, setLastName] = useState<string>("" as string);
  const [phone, setPhone] = useState<string>("" as string);
  const [email, setEmail] = useState<string>("" as string);
  const [address, setAddress] = useState<string>("" as string);

  const dispatch = useDispatch();

  const onAddContact = () => {
    const newContact: contact = {
      firstName,
      lastName,
      email,
      phone,
      address,
    };
    dispatch(addContact(newContact));
    setFirstName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setPhone("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <Input
            title="First Name :"
            placeholder="Jhon"
            value={firstName}
            onChangeText={(text: string) => setFirstName(text)}
          />
          <Input
            title="Last Name :"
            placeholder="Doe"
            value={lastName}
            onChangeText={(text: string) => setLastName(text)}
          />
          <Input
            title="Phone Number :"
            placeholder="123-456-7890"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(text: string) => setPhone(text)}
          />
          <Input
            title="Email :"
            keyboardType="email-address"
            placeholder="jhon@domain.com"
            autoCapitalize="none"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
          <Input
            title="Address :"
            placeholder="NYC,US-10009"
            value={address}
            multiline={true}
            numberOfLines={5}
            onChangeText={(text: string) => setAddress(text)}
          />
          <Button title={"Save"} color="teal" onPress={() => onAddContact()} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
});
