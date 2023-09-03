import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';


export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
  }
  registerUser = (email, password, confirmPassword, first_name, last_name) => {
    console.log("Register")
    if (password === confirmPassword) {
      console.log("Here")
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredital) => {
          Alert.alert('User Register');
          console.log("User registered!")
          this.props.navigation.replace('Login');
          firebase
            .database()
            .ref('/users/' + userCredital.user.uid)
            .set({
              email: userCredital.user.email,
              first_name: first_name,
              last_name: last_name,
              current_theme: "dark"
            });
        })
        .catch(error=>{
         alert(error.message)
        })
    }
    else{
      alert("Password don't match")
    }
  };
  render() {
     const {email, password, confirm_password, first_name, last_name}=this.state
    return (
     
      <View style={styles.container}>
        <Text style={styles.appTitleText}> Register </Text>
        <TextInput
          style={styles.textinput}
          placeholder={'First Name'}
          onChangeText={(text) => this.setState({ first_name: text })}
        />
        <TextInput
          style={styles.textinput}
          placeholder={'Last Name'}
          onChangeText={(text) => this.setState({ last_name: text })}
        />
        <TextInput
          style={styles.textinput}
          placeholder={'Enter Email'}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.textinput}
          placeholder={'Password'}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TextInput
          style={styles.textinput}
          placeholder={'Re-Enter Password'}
          onChangeText={(text) => this.setState({ confirm_password: text })}
        />
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => {
            this.registerUser(
              email,
              password,
              confirm_password,
              first_name,
              last_name
            );
          }}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.replace('Login');
          }}>
          <Text style={styles.buttonTextNewUser}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appIcon: {
    width: RFValue(200),
    height: RFValue(200),
    resizeMode: 'contain',
    marginBottom: RFValue(20),
  },
  appTitleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(40),
    fontFamily: 'Bubblegum-Sans',
    marginBottom: RFValue(20),
  },
  textinput: {
    width: RFValue(250),
    height: RFValue(40),
    padding: RFValue(10),
    marginTop: RFValue(10),
    borderColor: '#FFFFFF',
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(15),
    color: '#FFFFFF',
    backgroundColor: '#15193c',
    fontFamily: 'Bubblegum-Sans',
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: RFValue(30),
    backgroundColor: 'white',
    marginBottom: RFValue(20),
  },
  buttonText: {
    fontSize: RFValue(24),
    color: '#15193c',
    fontFamily: 'Bubblegum-Sans',
  },
  buttonTextNewUser: {
    fontSize: RFValue(12),
    color: '#FFFFFF',
    fontFamily: 'Bubblegum-Sans',
    textDecorationLine: 'underline',
  },
});
