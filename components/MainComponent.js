import React, { Component } from "react";
import { View } from "react-native";
import { HUSTLETABLES } from "../shared/hustleTables";
import ClassDirectory from "./ClassDirectoryComponent";
import ClassTable from "./ClassTableComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hustles: HUSTLETABLES,
      selectedHustle: null,
    };
  }

  onHustleSelect(hustleId) {
    this.setState({ selectedHustle: hustleId });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ClassDirectory
          hustles={this.state.hustles}
          onPress={(hustleId) => this.onHustleSelect(hustleId)}
        />
        <ClassTable
          hustle={
            this.state.hustles.filter(
              (hustle) => hustle.id === this.state.selectedHustle
            )[0]
          }
        />
      </View>
    );
  }
}

export default Main;
