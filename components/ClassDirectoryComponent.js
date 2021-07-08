import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import * as All from "../assets";

function ClassDirectory(props) {
  console.log(props.hustle);

  const renderDirectoryItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require("../assets/images/rockerboyAvatar.png") }}
      />
    );
  };

  return (
    <FlatList
      data={props.hustles}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default ClassDirectory;
