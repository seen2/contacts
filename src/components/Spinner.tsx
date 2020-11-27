import React from "react";

import { View, ActivityIndicator } from "react-native";

export default ({
  size,
  color,
}: {
  size: number;
  color: string;
}): React.ReactElement => (
  <View>
    <ActivityIndicator size={size || "large"} color={color || "red"} />
  </View>
);
