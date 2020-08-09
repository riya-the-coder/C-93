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
export default class HouseholdScreen extends Component {
    render(){
        return(
            <View>
                <Text style={{fontSize:20}}>HOUSE HOLD</Text>
                 <Image 
        source={require('../assets/hh.png')}
        style={{width:200, height:200}}
         />
          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>LOCKER KEYS</Text>
          </TouchableOpacity>

          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>CUPBOARD KEYS</Text>
          </TouchableOpacity>

          <TextInput
                style={styles.TextInput}
                placeholder={"ITEM PLACE"}
                maxLength={12}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>SPARE KEYS</Text>
          </TouchableOpacity>

     
        <TouchableOpacity>
        style={styles.buttons}
        <Text>SUBMIT</Text>
      </TouchableOpacity>
        </View>
        )
    }
    
}