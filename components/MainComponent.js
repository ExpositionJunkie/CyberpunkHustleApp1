import React, { Component } from "react";
import Constants from "expo-constants";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import ClassDirectory from "./ClassDirectoryComponent";
import ClassTable from "./ClassTableComponent";
import Home from "./HomeComponent";

const ClassDirectoryNavigator = createStackNavigator(
  {
    ClassDirectory: { screen: ClassDirectory },
    ClassTable: { screen: ClassTable },
  },
  {
    initialRouteName: "ClassDirectory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "red",
      heaederTitleStyle: {
        color: "White",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        color: "red",
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    ClassDirectory: { screen: ClassDirectoryNavigator },
  },
  {
    drawerBackgroundColor: "black",
  }
);

const AppNavigator = createAppContainer(MainNavigator);

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

//paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
