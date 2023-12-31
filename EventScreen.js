import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import * as React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons"
import {RFValue} from "react-native-responsive-fontsize"

export default class EventScreen extends React.Component{
  render(){
   
    return(
       <View style={styles.container}>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              style={styles.iconImage}
              source={require('../assets/calendarIcon.png')}
            />
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Calendar App</Text>
          </View>
        </View>
        <View style={styles.eventContainer}>  
            <Image
              style={styles.image}
              source={require('../assets/julyMonth.png')}
            />
            <View style={styles.dataContainer}>
              <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>
                  {this.props.route.params.events.value.title}
                </Text>
                <Text style={styles.monthText}>
                  {this.props.route.params.events.value.month}
                </Text>
                <Text style={styles.nameText}>
                  {this.props.route.params.events.value.name}
                </Text>
              </View>
       <View style={styles.iconContainer}>
               </View>
            </View>
            <View style={styles.eventsTextContainer}>
            <Text style={styles.eventsText}>
                  {this.props.route.params.events.value.events}
                </Text>
                <Text style={styles.nameText}>
                  {this.props.route.params.events.value.name}
                </Text>
             </View>
        
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  dataContainer: {
    flex: 1,
  },
  eventCard: {
    margin: RFValue(20),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: 'contain',
  },
  monthText: {
    flexDirection: 'row',
    padding: RFValue(20),
  },
  titleTextContainer: {
    flex: 0.8,
  },
  titleText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    color: 'white',
  },
  nameText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(18),
    color: 'white',
  },
  iconContainer: {
    flex: 0.2,
  },
  eventsTextContainer: {
    padding: RFValue(20),
  },
  eventsText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(15),
    color: 'white',
  },
  moralText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(20),
    color: 'white',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});

