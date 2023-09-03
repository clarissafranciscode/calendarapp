import * as React from 'react';
import {Text, View, StyleSheet} from "react-native"
import firebase from "firebase"


export default class LogoutScreen extends React.Component{
  componentDidMount(){
    firebase.auth().signOut()
    this.props.navigation.replace("Login")
  }
render(){
return(
   <View style={{flex: 1, justifyContent: 'center'}}> 
  <Text> Logout </Text>
  </View>
)
}

}