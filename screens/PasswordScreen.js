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
export default class PasswordScreen extends Component {
    render(){
      return(
        <View>
          <Text style={{fontSize:20}}>PASSWORDS</Text>
             <Image 
    source={require('../assets/passwords.png')}
    style={{width:200, height:200}}
     />

<TextInput
                style={styles.TextInput}
                placeholder={"PASSWORDS FOR ID, CARDS"}
                multiline={true}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>SAVE</Text>
          </TouchableOpacity>

        </View>
      )
    }
    
}