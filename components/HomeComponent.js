import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PlayerForm from "./PlayerForm";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View>
        <Text style={styles.headerTxt}>Do the Hustle!</Text>
        <View style={styles.formContainer}>
          <PlayerForm />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 25,
    alignSelf: "center",
    marginTop: 30,
  },
  formContainer: {
    margin: 30,
  },
});

export default Home;
