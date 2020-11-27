import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import ContactsScreen from "../../screens/ContactsScreen";
import ContactDetailScreen from "../../screens/ContactDetailScreen";

const Stack = createStackNavigator();

export default function ContactStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ route, navigation }) => ({
          title: "Contacts",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerRight: () => (
            <View style={{ margin: 10 }}>
              <Ionicons name={"ios-search"} size={40} color={"teal"} />
            </View>
          ),
          headerTintColor: "teal",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 28,
          },
        })}
        name="Home"
        component={ContactsScreen}
      />

      <Stack.Screen
        name="ContactDetail"
        options={({ route, navigation }) => ({
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "teal",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
        component={ContactDetailScreen}
      />
    </Stack.Navigator>
  );
}
