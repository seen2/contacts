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
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";

import Input from "../components/Input";
import Button from "../components/Button";
import { Store } from "../types/mainTypes";
import { register } from "../redux/actions/authAction";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

export default function RegisterScreen() {
  const [email, setEmail] = useState<string>("" as string);
  const [password, setPassword] = useState<string>("" as string);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector<Store, Store["user"]>((state) => state.user);
  const [err, setErr] = useState(" ");
  const signup = async () => {
    try {
      setLoading(true);
      await register({ email, password }, dispatch);
      alert("Account Created!!!");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Something Went Wrong");
    } finally {
      setLoading(false);
      setErr(user.error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Ionicons name={"ios-contact"} size={100} color={"teal"} />
          {err && <Error error={err} />}
        </View>

        <Input
          title="Email :"
          keyboardType="email-address"
          placeholder="jhon@domain.com"
          autoCapitalize="none"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <Input
          title="Password :"
          placeholder="******"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry={true}
        />
        {!loading ? (
          <Button title={"Sign Up"} color="teal" onPress={() => signup()} />
        ) : (
          <Spinner size={30} color="teal" />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
  },
});
