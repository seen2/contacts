import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import MyTabs from "./tab/TabNavigation";
import { Store } from "../types/mainTypes";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  const currentUser = useSelector<Store, Store["user"]>((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!currentUser.user ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
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
              name="Register"
              component={RegisterScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={MyTabs}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
