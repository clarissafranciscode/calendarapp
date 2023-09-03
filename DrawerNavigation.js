import * as React from 'react';
import StackNavigator from "./StackNavigation"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Profile from "../screens/Profile"
import Logout from "../screens/Logout"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Logout" component={Logout}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;