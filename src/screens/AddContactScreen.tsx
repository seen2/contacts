import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

export default function AddContactScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Input title="First Name :" placeholder="Jhon" />
        <Input title="Last Name :" placeholder="Doe" />
        <Input
          title="Phone Number :"
          placeholder="123-456-7890"
          keyboardType="phone-pad"
        />
        <Input
          title="Email :"
          keyboardType="email-address"
          placeholder="jhon@domain.com"
          autoCapitalize="none"
        />
        <Button title={"Save"} color="teal" onPress={() => {}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
});
