import { FlatList, StyleSheet, StatusBar, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import ListItem from "../components/listItem";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>Hello World</Text>
  </View>
);

const Test = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item title={item.title} />}
      />
      <View style={{ marginTop: 2 }}>
        <ListItem name="Another Form" description="This is hardcoded" />
      </View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    borderRadius: 15,
    backgroundColor: "lightblue",
    padding: 10,
    marginTop: 10,
    marginHorizontal: 2,
    alignItems: "flex-start",
  },
  title: {
    color: "darkred",
    fontSize: 30,
  },
  text: {
    color: "darkblue",
    fontSize: 16,
  },
});
