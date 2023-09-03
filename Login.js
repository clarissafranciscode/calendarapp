import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';

const appIcon = require('../assets/calendarIcon.png');

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  signIn = async (email, password) => {
    console.log(email);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('Dashboard')
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.appTitleText}> Calendar App </Text>
        <Image style={styles.appIcon} source={appIcon} />
        <TextInput
          onChangeText={(text) => this.setState({ email: text })}
          style={styles.textinput}
          placeholder={'Enter Email'}
        />
        <TextInput
          onChangeText={(text) => this.setState({ password: text })}
          style={styles.textinput}
          placeholder={'Enter Password'}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => {
            this.signIn(email, password);
          }}
          style={[{ marginTop: 20 }, styles.button]}>
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}>
          <Text style={styles.buttonTextNewUser}> New User? </Text>
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
    height: RFValue(50),
    padding: RFValue(10),
    borderColor: '#FFFFFF',
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(20),
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
