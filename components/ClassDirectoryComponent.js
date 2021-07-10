import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import * as All from "../assets";
import { HUSTLETABLES } from "../shared/hustleTables";

class ClassDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hustles: HUSTLETABLES,
      selectedHustle: null,
    };
  }

  static navigationOptions = {
    title: "ClassDirectory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          onPress={() => navigate("ClassTable", { hustleId: item.id })}
          leftAvatar={{
            source: require("../assets/images/rockerboyAvatar.png"),
          }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.hustles}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default ClassDirectory;
