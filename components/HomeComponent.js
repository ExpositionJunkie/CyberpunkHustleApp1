import React, { Component } from "react";
import { View, Text } from "react-native";
import PlayerForm from "./PlayerForm";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View>
        <Text>Home Component</Text>
        <PlayerForm />
      </View>
    );
  }
}

export default Home;
