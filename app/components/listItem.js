import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItem = ({ id, name, description, onPress }) => {
  return (
    <Pressable onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{id}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "azure",
    margin: 6,
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
