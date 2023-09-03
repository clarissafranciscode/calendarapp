import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigation/DrawerNavigation';
import Login from './screens/Login';
import Register from './screens/Register';
import firebase from 'firebase';
import { firebaseConfig } from './config';
import { createStackNavigator } from '@react-navigation/stack';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initalRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
