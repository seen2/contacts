import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../../screens/SettingsScreen";

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ route, navigation }) => ({
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "teal",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
        name="Settings"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
