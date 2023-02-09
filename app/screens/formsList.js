//import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/listItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import formApi from "../httpApi/formService";
import mapper from "../util/formMapper";

export default function FormsList({ route }) {
  const [forms, setForms] = useState([]);
  //const [list, setList] = useState(FAKEFORMS);

  const loadForms = () => {
    formApi.getForms(route.params.source).then(
      (response) => setForms(getListData(response.data.Forms)),
      (error) => console.log("loadForms error", error)
    );
  };

  useEffect(() => {
    loadForms();
  }, []);

  const getListData = (data) => {
    const list = mapper.mapForms(data);
    return list;
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const handlePress = (item) => {
    console.log("handlePresss", item);
  };

  const handleButtonPress = () => {
    console.log("handleButtonPresss");
  };

  return (
    <Screen>
      <View style={styles.screen}>
        <FlatList
          data={forms}
          keyExtractor={(form) => form.hash}
          renderItem={({ item, index }) => (
            <ListItem
              id={item.hash}
              name={item.name}
              // description={item.description}
              onPress={() => handlePress(item)}
            />
          )}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      <Button title="Continue" onPress={handleButtonPress} />
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
