import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/listItem";

const FAKEENTRIES = [
  {
    id: 0,
    line: "Name, Surname, Code , Email",
  },
  {
    id: 1,
    line: "John, Adams, '123', abc@abc.abc",
  },
  {
    id: 2,
    line: "Stacey, Miller, '122', stacy@abc.abc",
  },
];

function FormEntries({ route }) {
  const [entries, setEntries] = useState(FAKEENTRIES);
  console.log("entries", entries);
  console.log("route", route);

  const handlePress = (item) => {
    console.log("handlePresss", item);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={entries}
          keyExtractor={(entry) => entry.id}
          renderItem={({ item, index }) => (
            <ListItem
              name={item.line}
              id={item.id}
              onPress={() => handlePress(item)}
            />
          )}
        />
      </View>
      ;
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "whitesmoke",
  },
});

export default FormEntries;
