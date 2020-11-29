import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import Spinner from "../components/Spinner";
import { onSignout } from "../redux/actions/authAction";

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const onLogout = async () => {
    try {
      await onSignout(dispatch);
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111111",
      }}
    >
      <Ionicons name={"ios-contact"} size={100} color={"teal"} />

      <TouchableWithoutFeedback onPress={() => onLogout()}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#111111",
          }}
        >
          <Text style={{ color: "teal", fontSize: 30, margin: 10 }}>
            Log out
          </Text>
          <AntDesign name="logout" size={50} color="teal" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
