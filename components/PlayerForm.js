import React, { Component } from "react";
import {
  Text,
  View,
  Picker,
  StyleSheet,
  ScrollView,
  Switch,
  Button,
} from "react-native";
import { Card, Divider } from "react-native-elements";
import RollHustle from "./RollHustle";

class PlayerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charClass: "",
      level: "",
      days: "",
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.formRow}>
            <Picker
              style={styles.formPicker}
              selectedValue={this.state.charClass}
              onValueChange={(itemValue) =>
                this.setState({ charClass: itemValue })
              }
            >
              <Picker.Item label="Character Class" value="" />
              <Picker.Item label="Rockerboy" value="Rockerboy" />
              <Picker.Item label="Solo" value="Solo" />
              <Picker.Item label="Netrunner" value="Netrunner" />
              <Picker.Item label="Tech" value="Tech" />
              <Picker.Item label="Medtech" value="Medtech" />
              <Picker.Item label="Media" value="Media" />
              <Picker.Item label="Exec" value="Exec" />
              <Picker.Item label="Lawman" value="Lawman" />
              <Picker.Item label="Fixer" value="Fixer" />
              <Picker.Item label="Nomad" value="Nomad" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Picker
              style={styles.formPicker}
              selectedValue={this.state.level}
              onValueChange={(itemValue) => this.setState({ level: itemValue })}
            >
              <Picker.Item label="Character Level" value="" />
              <Picker.Item label="Level 1" value="1" />
              <Picker.Item label="Level 2" value="2" />
              <Picker.Item label="Level 3" value="3" />
              <Picker.Item label="Level 4" value="4" />
              <Picker.Item label="Level 5" value="5" />
              <Picker.Item label="Level 6" value="6" />
              <Picker.Item label="Level 7" value="7" />
              <Picker.Item label="Level 8" value="8" />
              <Picker.Item label="Level 9" value="9" />
              <Picker.Item label="Level 10" value="10" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Picker
              style={styles.formPicker}
              selectedValue={this.state.days}
              onValueChange={(itemValue) => this.setState({ days: itemValue })}
            >
              <Picker.Item label="Days of Hustle" value="" />
              <Picker.Item label="1 Day" value="1" />
              <Picker.Item label="2 Days" value="2" />
              <Picker.Item label="3 Days" value="3" />
              <Picker.Item label="4 Days" value="4" />
              <Picker.Item label="5 Days" value="5" />
              <Picker.Item label="6 Days" value="6" />
              <Picker.Item label="7 Days" value="7" />
              <Picker.Item label="8 Days" value="8" />
              <Picker.Item label="9 Days" value="9" />
              <Picker.Item label="10 Days" value="10" />
              <Picker.Item label="11 Days" value="11" />
              <Picker.Item label="12 Days" value="12" />
              <Picker.Item label="13 Days" value="13" />
              <Picker.Item label="14 Days" value="14" />
            </Picker>
          </View>
          <View>
            <RollHustle
              charClass={this.state.charClass}
              level={this.state.level}
              days={this.state.days}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
  },
  formRow: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "space-around",
  },
  formPicker: {
    flexBasis: 300,
    paddingLeft: 20,
  },
});

export default PlayerForm;
