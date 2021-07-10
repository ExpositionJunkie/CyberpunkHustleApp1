import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card, Divider } from "react-native-elements";
import { HUSTLETABLES } from "../shared/hustleTables";

function RenderTable({ hustle }) {
  if (hustle) {
    function HustleItem({ tbl }) {
      if (tbl) {
        hustle.tableArr.map((hustleItem, index) => {
          return <Text key={index}>{hustleItem.description}</Text>;
        });
      }
      return <View />;
    }

    return (
      <ScrollView>
        <Card
          featuredTitle={hustle.name}
          image={require("../assets/images/rockerboy.png")}
        >
          {hustle.tableArr.map((hustleItem, index) => {
            return (
              <View key={index}>
                <Text style={styles.description}>{hustleItem.description}</Text>
                <View style={styles.lvlContainer}>
                  <Text style={styles.lvl1}>
                    Levels 1-4: {hustleItem.level1}
                  </Text>
                  <Text style={styles.lvl2}>
                    Levels 5-7: {hustleItem.level2}
                  </Text>
                  <Text style={styles.lvl3}>
                    Levels 8-10: {hustleItem.level3}
                  </Text>
                </View>
                <Divider orientation="horizontal" style={{ marginTop: 10 }} />
              </View>
            );
          })}
        </Card>
      </ScrollView>
    );
  }
  return <View />;
}

class ClassTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hustles: HUSTLETABLES,
    };
  }

  static navigationOptions = {
    title: "Class Tables",
  };

  render() {
    const hustleId = this.props.navigation.getParam("hustleId");
    const hustle = this.state.hustles.filter(
      (hustle) => hustle.id === hustleId
    )[0];

    return <RenderTable hustle={hustle} />;
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    marginTop: 15,
  },
  lvlContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lvl1: {
    color: "red",
  },
  lvl2: {
    color: "orange",
  },
  lvl3: {
    color: "green",
  },
});
export default ClassTable;
