
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageInc from './Components/ImageInc';
import AddIncome from './Components/AddIncome';
import Login from './Components/Login';

const Stack = createNativeStackNavigator();

export default function App() {
return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Add_Income" screenOptions={{headerShown:false}}>
    <Stack.Screen name="login" component={Login}/>
    <Stack.Screen name="Add_Income" component={AddIncome}/>
    <Stack.Screen name="AddImage" component={ImageInc} />
  </Stack.Navigator>
</NavigationContainer>
);
};

