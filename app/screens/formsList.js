import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

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

// const listItem = (item) => {
//   const { id, name, description, isPublic } = item; //destructuring

//   <View style={styles.item}>
//     <Text style={styles.title}>{name}</Text>
//     <Text style={styles.text}>{description}</Text>
//     <Text style={styles.text}>{{ isPublic }}</Text>
//   </View>;
// };
// const renderComp = ({ item, index }) => {
//   //console.log(item, index);
//   return (
//     <ListItem id={item.hash} name={item.name} description={item.description} />
//   );
// };

const renderSeparator = () => <View style={styles.separator} />;

const handlePress = (arg) => {
  console.log("handlePresss", arg);
};

export default function FormsList() {
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
