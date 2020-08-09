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
export default class GroceryScreen extends Component {
  render(){
    return(
        <View>
            <Text style={{fontSize:20}}>GROCERY</Text>
             <Image 
    source={require('../assets/grocery.png')}
    style={{width:200, height:200}}
     />
  <TextInput
                style={styles.TextInput}
                placeholder={"LIST OF STOCKED GROCERY"}
               multiline={true} />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>EXSISTING ONES</Text>
          </TouchableOpacity>

          <TextInput
                style={styles.TextInput}
                placeholder={"LIST OF REQUIRED GROCERY"}
              multiline={true}   />

         <TouchableOpacity>
            style={styles.buttons}
            <Text>REQUIRED ONES</Text>
          </TouchableOpacity>

       <TouchableOpacity>
            style={styles.buttons}
            <Text>SUBMIT</Text>
          </TouchableOpacity>   
     </View>
    )
  }    
}