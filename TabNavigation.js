import { Text, View, StyleSheet } from 'react-native';
import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CreateEvent from "../screens/CreateEvent"
import Ionicons from "react-native-vector-icons/Ionicons"
import {RFValue} from "react-native-responsive-fontsize"


const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{
  render(){
    return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Create Event') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        activeColor={'#ee8249'}
        inactiveColor={'gray'}>
        <Tab.Screen
          name="Create Event"
          component={CreateEvent}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    )
  }
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#2f345d',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  bottomTabStyleLight: {
    backgroundColor: 'white',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});
