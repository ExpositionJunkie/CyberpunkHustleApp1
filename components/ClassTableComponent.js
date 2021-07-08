import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

function RenderClassTable({ hustle }) {
  if (hustle) {
    return (
      <Card
        featuredTitle={hustle.name}
        image={require("../assets/images/rockerboy.png")}
      >
        <Text style={{ margin: 10 }}>{hustle.roll1[0]}</Text>
      </Card>
    );
  }
  return <View />;
}

function ClassTable(props) {
  return <RenderClassTable hustle={props.hustle} />;
}

export default ClassTable;
