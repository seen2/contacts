import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ContactsScreen from "./src/screens/ContactsScreen";
import AddContactScreen from "./src/screens/AddContactScreen";
import { Button } from "react-native";
import ContactDetailScreen from "./src/screens/ContactDetailScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({ route, navigation }) => ({
            title: "Contacts",
            headerStyle: {
              backgroundColor: "#121212",
            },
            headerTintColor: "teal",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 28,
            },
            headerRight: () => (
              <Button
                title="Add Contact"
                color={"teal"}
                onPress={() => navigation.navigate("AddContact")}
              />
            ),
          })}
          name="Home"
          component={ContactsScreen}
        />
        <Stack.Screen
          name="AddContact"
          options={({ route, navigation }) => ({
            title: "Add Contact",
            headerStyle: {
              backgroundColor: "#121212",
            },
            headerTintColor: "teal",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
          component={AddContactScreen}
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
    </NavigationContainer>
  );
}

export default function App() {
  return <MyStack />;
}
