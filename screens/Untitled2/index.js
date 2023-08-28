import { ActivityIndicator } from "react-native";
import { Switch } from "react-native";
import { Slider } from "react-native-elements";
import { RadioGroup } from "react-native-radio-buttons-group";
import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.uzvJRWxT}></TextInput><CheckBox style={styles.GWeTFDzW} title="Checkbox Title"></CheckBox><RadioGroup style={styles.wOqYfyqJ} radioButtons={[{
        id: "1",
        label: "Option 1",
        value: "option1"
      }, {
        id: "2",
        label: "Option 2",
        value: "option2"
      }]} layout="column"></RadioGroup><Slider style={styles.QJJALCpO} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><Switch style={styles.xUOYSFye}></Switch><ActivityIndicator style={styles.aNIZXyDU}></ActivityIndicator></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  uzvJRWxT: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  GWeTFDzW: {
    width: 183,
    height: 69,
    position: "absolute",
    left: 69,
    top: 294
  },
  wOqYfyqJ: {
    width: 120,
    height: 70
  },
  QJJALCpO: {
    width: 150,
    height: 40
  },
  xUOYSFye: {
    width: 50,
    height: 25
  },
  aNIZXyDU: {
    width: 50,
    height: 50
  }
});
export default Untitled2;