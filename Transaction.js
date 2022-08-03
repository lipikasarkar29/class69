import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      domState:"normal",
      hasCameraPermissions:null,
      scanned:false,
      scannedData:""
    }
  }

  getCameraPermissions= async domState=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermissions:status=="granted",
      domState:domState,
      scanned:false
    })
  }
  
  
  render() {
    const {domState,hasCameraPermissions,scannedData,sacnned}=this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {hasCameraPermissions? scannedData:"Request for Camera Permission"}
        </Text>
        <TouchableOpacity style={[styles.button,{marginTop:25}]} onPress={()=>this.getCameraPermissions("scanner")}>
        <Text style={styles.buttonText}>Scan QR code</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  button:{
    width:"43%",
    height:55,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f48d20",
    borderRadius:15

  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  buttonText: {
    color: "#ffff",
    fontSize: 24
  }
});
