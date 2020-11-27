import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import SettingsStack from "../stack/SettingsStack";
import ContactStack from "../stack/ContactStack";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Contact"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string="ios-contacts";

            if (route.name === "Contact") {
              iconName = "ios-contacts";
            } else if (route.name === "Settings") {
              iconName = "ios-list";
            }

            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "teal",
          inactiveTintColor: "gray",
          activeBackgroundColor: "#121212",
          inactiveBackgroundColor: "#121212",
        }}
      >
        <Tab.Screen name="Contact" component={ContactStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
