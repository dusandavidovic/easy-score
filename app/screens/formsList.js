import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/listItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import formApi from "../httpApi/formService";
import mapper from "../util/formMapper";
import routes from "../navigation/routes";

export default function FormsList({ navigation, route }) {
  const [forms, setForms] = useState([]);

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
    console.log(navigation);
    navigation.navigate(routes.FORM_ENTRIES, {
      formId: item.hash,
    });
  };

  const handleButtonPress = () => {
    console.log("handleButtonPresss");
  };
  console.log(forms);
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
