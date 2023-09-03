import { Text, View, StyleSheet } from 'react-native';
import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import EventScreen from "../screens/EventScreen"
import TabNavigator from "./TabNavigation"

const Stack = createStackNavigator()

const StackNavigator= ()=>{
  return(
    <Stack.Navigator initalRouteName="home" screenOptions={headerShown= false}> 
    <Stack.Screen name="Home" component={TabNavigator}/>
    <Stack.Screen name="EventScreen" component={EventScreen}/>
    </Stack.Navigator>
  )
}
export default StackNavigator;