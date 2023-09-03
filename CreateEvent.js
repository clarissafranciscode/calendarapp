import { Text, View, StyleSheet, Button, Image, SafeAreaView, TextInput, ScrollView, Platform, StatusBar } from 'react-native';
import * as React from 'react';
import DropDownPicker from "react-native-dropdown-picker"
import Calendar from 'react-native-calendar';
import {RFValue} from "react-native-responsive-fontsize"

export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: true,
      previewImage: "image_1",
      dropdownHeight: 40,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  async addEvent() {
    if (this.state.title && this.state.time) {
      var d = new Date()
      let eventData = {
        preview_image: this.state.previewImage,
        title: this.state.title,
        time: this.state.time,
        // author: firebase.auth().currentUser.displayName,
        author_uid: firebase.auth().currentUser.uid,
        likes: 0
      }
      console.log(eventData)
      await firebase
        .database()
        .ref("/posts/" + (Math.random().toString(36).slice(2)))
        .set(eventData)
        .then(function (snapshot) {

        })
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Feed")
    } else {
      Alert.alert(
        'Error',
        'All fields are required!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    }
  }
  render() {
    if (this.state.fontsLoaded) {
      
      let preview_images = {
        image_1: require("../assets/augustIcon.png"),
        image_2: require("../assets/septemberMonth.png"),
        image_3: require("../assets/octoberMonth.png"),
        image_4: require("../assets/novemberMonth.png"),
        image_5: require("../assets/decemberMonth.png"),
      };
     
      return (
        
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/calendarIcon.png")}
                style={styles.iconImage}
              ></Image>
            </View>
          <Calendar 
        style={{
          borderWidth: 1,
          borederColor: "gray",
          height: 350
        }}
        // Specify the current date
  current={'2023-06-08'}
  // Callback that gets called when the user selects a day
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Mark specific dates as marked
  markedDates={{
    '2023-21-08': {selected: true, marked: true, selectedColor: 'pink'},
    '2023-15-09': {selected: true, marked: true, selectedColor: 'yellow'},
    '2023-25-12': {selected: true, marked: true, selectedColor: 'blue'}
  }}
/>
        />
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>  Month Calendar! </Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            ></Image>
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                items={[
                  { label: "Image 1", value: "image_1" },
                  { label: "Image 2", value: "image_2" },
                  { label: "Image 3", value: "image_3" },
                  { label: "Image 4", value: "image_4" },
                  { label: "Image 5", value: "image_5" },
                ]}
                defaultValue={this.state.previewImage}
                open={this.state.dropdownHeight == 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "white",
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 170 ? "black" : "white",
                  fontFamily: "Bubblegum-Sans",
                }}
                onSelectItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>
            <ScrollView>
              <TextInput
                style={styles.inputFont}
                onChangeText={(name) => this.setState({ name })}
                placeholder={"Name of the Event"}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(time) => this.setState({ time })}
                placeholder={"Time"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(endtime) => this.setState({ endtime })}
                placeholder={"End Time"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(month) => this.setState({ month })}
                placeholder={"Month"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <View style={styles.submitButton}>
                <Button
                  onPress={() => this.addStory()}
                  title="Submit"
                  color="#841584"
                />
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    marginTop: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans",
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
});
