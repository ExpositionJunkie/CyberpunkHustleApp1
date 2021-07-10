import React, { Component } from "react";
import Constants from "expo-constants";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ClassDirectory from "./ClassDirectoryComponent";
import ClassTable from "./ClassTableComponent";

const ClassDirectoryNavigator = createStackNavigator(
  {
    ClassDirectory: { screen: ClassDirectory },
    ClassTable: { screen: ClassTable },
  },
  {
    initialRouteName: "ClassDirectory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "red",
      heaederTitleStyle: {
        color: "black",
      },
    },
  }
);

const AppNavigator = createAppContainer(ClassDirectoryNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default Main;
