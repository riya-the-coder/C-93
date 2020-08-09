import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import db from "../config";
import firebase from "firebase";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
export default class HomeScreen extends Component {
    render(){
      return(
        <View>
          <View style={styles.santaView}>
          <Image
          source={require('../assets/hh.png')}
          style={{width:100, height:100}}
           />
      <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HouseholdScreen.js')}>
              <Text>HOUSE HOLD</Text>
            </TouchableOpacity>
         </View>
      
        <View style={styles.santaView}>
        <Image
        source={require('../assets/grocery.png')}
        style={{width:100, height:100}}
         />
    <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('GroceryScreen.js')}>
            <Text>GROCERY</Text>
          </TouchableOpacity>
       </View>
       <View style={styles.santaView}>
        <Image 
        source={require('../assets/ps.jpg')}
        style={{width:100, height:100}}
         />
    <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('PsitemScreen.js')}>
            <Text>PERSONAL ITEMS</Text>
          </TouchableOpacity>
       </View>
       <View style={styles.santaView}>
        <Image 
        source={require('../assets/passwords.png')}
        style={{width:100, height:100}}
         />
    <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('PasswordScreen.js')}>
            <Text>PASSWORD</Text>
          </TouchableOpacity>
       </View>
       </View>
      )
    }
    
}