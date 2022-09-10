import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Backend Testing Purposes
import HTTPScreen from './screens/HTTPSTestScreen';

const Stack = createStackNavigator();

export default function RootAppNAvigator() {
  return (
    <NavigationContainer>
      {/** To test your screen - frontend, just change the
       * initialRouteName to the screen that you want to test */}
      <Stack.Navigator
        options={{ headerShown: false }}
        initialRouteName="HTTPScreen"
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: true,
        }}
      >
        <Stack.Screen
          name="HTTPScreen"
          component={HTTPScreen}
          options={{ headerShown: false, title: "HTTP Test Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}