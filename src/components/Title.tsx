import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default (props: { title: string }): React.ReactElement => (
  <View style={{ flex: 1, marginLeft: 10, height: 30, marginBottom: 5 }}>
    <Text style={styles.container}>{props.title || "Movie"}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    fontWeight: "900",
    color: "#d6daeb",
  },
});
