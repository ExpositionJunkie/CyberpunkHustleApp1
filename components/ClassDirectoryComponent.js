import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function ClassDirectory(props) {
  console.log(props.hustle);

  const renderDirectoryItem = ({ item }) => {
    return <ListItem title={item.name} />;
  };

  return (
    <FlatList
      data={props.hustle}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default ClassDirectory;
