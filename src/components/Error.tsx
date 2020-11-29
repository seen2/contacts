import React from "react";

import { View, Text } from "react-native";

export const Error = (props: { error: string }): React.ReactElement => {
  return (
    <View>
      <Text
        style={{
          fontSize: 17,
          textAlign: "center",
          color: "red",
          fontWeight: "700",
        }}
      >
        {" "}
        {props.error}{" "}
      </Text>
    </View>
  );
};
export default Error;
