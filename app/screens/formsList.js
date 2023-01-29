import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/listItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

const FORMS = [
  {
    name: "Test01",
    description: "My First Form",
    entryCountToday: 1,
    isPublic: false,
    hash: "z2w7y1v0tpzni8",
  },
  {
    name: "Test02",
    description: "My Second Form",
    entryCountToday: 0,
    isPublic: true,
    hash: "z2q7y1v0tpzni8",
  },
];

const renderSeparator = () => <View style={styles.separator} />;

const handlePress = () => {
  console.log("handlePresss");
};

const handleButtonPress = (arg) => {
  console.log("handleButtonPresss");
};

export default function FormsList({ route }) {
  console.log(route.params.source);
  return (
    <Screen>
      <View style={styles.screen}>
        <FlatList
          data={FORMS}
          keyExtractor={(form) => form.hash}
          renderItem={({ item, index }) => (
            <ListItem
              id={item.hash}
              name={item.name}
              description={item.description}
              onPress={handlePress}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      <Button title="Save" onPress={handleButtonPress} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.card,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  screen: {
    padding: 20,
    backgroundColor: "whitesmoke",
  },
  separator: {
    backgroundColor: "black",
    height: 1,
  },
  title: {
    color: "darkred",
    fontSize: 20,
  },
  text: {
    color: "darkblue",
    fontSize: 16,
  },
});
