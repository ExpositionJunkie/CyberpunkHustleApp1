import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Divider } from "react-native-elements";
import { HUSTLETABLES } from "../shared/hustleTables";

function calcEddies(level, charArr) {
  console.log("CharArr: " + charArr.level1);
  console.log("Level: " + level);
  switch (true) {
    case level <= 4:
      console.log(`charArr.level1 in calcEddies ${charArr.level1}`);
      return Number(charArr.level1);
    case level > 4 && level < 8:
      console.log(`charArr.level1 in calcEddies ${charArr.level2}`);
      return Number(charArr.level2);
    case level >= 8 && level <= 10:
      console.log(`charArr.level1 in calcEddies ${charArr.level3}`);
      return Number(charArr.level3);
  }
}

function RollHustle({ charClass, level, days }) {
  const hustleTables = HUSTLETABLES;
  const char = hustleTables.filter((char) => char.name === charClass)[0];
  let totalEddies = 0;
  console.log(`char class ${charClass}`);
  console.log(`char level ${level}`);
  console.log(`char days ${days}`);

  if (charClass !== "" && level !== "" && days !== "") {
    //console.log(`char ${char}`);

    const rollHustle = () => {
      let returnArray = [];

      for (let day = 1; day < days; day++) {
        let roll = Math.floor(Math.random() * 6 + 1);
        let dayObj = {};
        //console.log(char);
        let dayHustle = char.tableArr[roll - 1];

        dayObj.id = day + 1;
        dayObj.message = dayHustle.description;

        let dayEddies = calcEddies(level, dayHustle);
        dayObj.eddies = dayEddies;

        totalEddies += dayEddies;
        console.log(dayObj);
        returnArray.push(dayObj);
      }
      return returnArray;
    };

    const weekArr = rollHustle();
    return (
      <View style={styles.cardContainer}>
        <Card
          featuredTitle={`${charClass} | Level ${level} | ${days} days`}
          featuredSubtitle={`Total: ${"\u20A0"} ${totalEddies}`}
          image={require("../assets/images/techAvatar.png")}
        >
          {weekArr.map((day) => {
            return (
              <View key={day.id}>
                <Text>
                  {"\u20A0"} {day.eddies} - Day {day.id}
                </Text>
                <Text>{day.message}</Text>
                <Divider orientation="horizontal" style={{ marginTop: 10 }} />
              </View>
            );
          })}
          <Text style={styles.total}>
            Total: {"\u20A0"} {totalEddies}
          </Text>
          <Divider orientation="horizontal" style={{ marginTop: 10 }} />
        </Card>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Oops! Looks like you didn't select any choices yet!</Text>
        <Text>
          Please choose your character class, your player level, and how many
          days you would like to roll for above.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  total: {
    fontSize: 18,
  },
  cardContainer: {
    marginBottom: 40,
  },
});

export default RollHustle;
