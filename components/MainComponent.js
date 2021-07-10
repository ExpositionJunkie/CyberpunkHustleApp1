import React, { Component } from "react";
import Constants from "expo-constants";
import { View, Platform, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import ClassDirectory from "./ClassDirectoryComponent";
import ClassTable from "./ClassTableComponent";
import Home from "./HomeComponent";

/*
IMPORTANT NOTE: If navigator is not working correctly, you must make sure that 
"react-native-reanimated": "1.0.0"
Expo install likes to override this and set this to "2.2.0" which does not have the method that this version of navigation calls.
*/

const ClassDirectoryNavigator = createStackNavigator(
  {
    ClassDirectory: {
      screen: ClassDirectory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    ClassTable: { screen: ClassTable },
  },
  {
    initialRouteName: "ClassDirectory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "red",
      headerTitleStyle: {
        color: "red",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        color: "red",
      },
      headerLeft: (
        <Icon
          name="dice"
          type="font-awesome-5"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    ClassDirectory: {
      screen: ClassDirectoryNavigator,
      navigationOptions: {
        drawerLabel: "Class Hustle Tables",
      },
    },
  },
  {
    drawerBackgroundColor: "red",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stackIcon: {
    marginLeft: 10,
    color: "red",
    fontSize: 24,
  },
});

export default Main;

//paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
