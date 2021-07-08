import React, { Component } from "react";
import { View, Text } from "react-native";

class Test extends Component {
  static navigationOptions = {
    title: "Test",
  };

  render() {
    return (
      <View>
        <Text>Test Component</Text>
      </View>
    );
  }
}

export default Test;
