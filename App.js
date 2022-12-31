import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageInc from "./Components/ImageInc";
import AddIncome from "./Components/AddIncome";
import Login from "./Components/Login";
import TopBarNavigator from "./Components/TopBarNavigator";

import { RootSiblingParent } from "react-native-root-siblings";
// import SMSTracking from "./Components/SMSTracking";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Add_Income"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="toptabs" component={TopBarNavigator} />
          <Stack.Screen name="Add_Income" component={AddIncome} />
          <Stack.Screen name="AddImage" component={ImageInc} />
          {/* <Stack.Screen name="SMSTracking" component={SMSTracking} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
