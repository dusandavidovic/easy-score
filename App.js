import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import routes from "./app/navigation/routes";

import FormsList from "./app/screens/formsList";
import WelcomeScreen from "./app/screens/welcomeScreen";
import FormEntries from "./app/screens/formEntries";
import FormDetail from "./app/screens/formDetail";

const Stack = createNativeStackNavigator();
const StackNavigator = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.WELCOME}
      component={WelcomeScreen}
      options={{ title: "Welcome" }}
    />
    <Stack.Screen
      name={routes.FORMS_LIST}
      component={FormsList}
      options={{ title: "Forms List" }}
    />
    <Stack.Screen
      name={routes.FORM_DETAIL}
      component={FormDetail}
      options={{ title: "Form Detail" }}
    />
    <Stack.Screen
      name={routes.FORM_ENTRIES}
      component={FormEntries}
      options={{ title: "Form Entries" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
