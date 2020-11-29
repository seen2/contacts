import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import MyTabs from "./tab/TabNavigation";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
          </>
        ) : (
          <>
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
              name="Home"
              component={MyTabs}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
