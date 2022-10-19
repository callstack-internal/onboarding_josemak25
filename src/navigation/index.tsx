import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import { HomeScreen } from "../screens/Home";
import { DetailScreen } from "../screens/Detail";
import useColorScheme from "../hooks/useColorScheme";
import { RootStackParamList } from "../../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Weather" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
