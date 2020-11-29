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
import { onLogin } from "../redux/actions/userAction";
import Spinner from "../components/Spinner";

export default function SettingsScreen() {
  const [email, setEmail] = useState<string>("" as string);
  const [password, setPassword] = useState<string>("" as string);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const login = async () => {
    try {
      setLoading(true);
      await onLogin({ email, password }, dispatch);
    } catch (error) {
      alert("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  const user = useSelector<Store, Store["user"]>((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Ionicons name={"ios-contact"} size={100} color={"teal"} />
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
          {loading ? (
            <view>
              <Button title={"Login"} color="teal" onPress={() => login()} />
              <Text
                style={{
                  color: "#fff3f3f3",
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Didn't have account?
              </Text>
              <Button title={"Sign Up"} color="teal" onPress={() => {}} />
            </view>
          ) : (
            <Spinner size={30} color="teal" />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
  },
});
