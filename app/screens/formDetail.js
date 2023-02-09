import React, { useEffect, useState } from "react";
import { Button, FlatList, View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/listItem";
import routes from "../navigation/routes";

function FormDetail({ navigation, route }) {
  //const [entries, setEntries] = useState(FAKEENTRIES);

  const [fields, setFields] = useState([]);

  const loadFormFields = () => {
    console.log("loadFormFields", route.params);
    // formApi.getForms(route.params.source).then(
    //   (response) => setForms(getListData(response.data.Forms)),
    //   (error) => console.log("loadForms error", error)
    // );
  };

  useEffect(() => {
    loadFormFields();
  }, []);

  // console.log("entries", entries);
  // console.log("route", route);

  const handlePress = (item) => {
    console.log("handlePresss", item);
  };
  const handleButtonPress = () => {
    console.log("handleButtonPresss");
    navigation.navigate(routes.FORM_ENTRIES, {
      sourceId: route.params.sourceId,
      formId: route.params.formId,
      fields: fields,
    });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={fields}
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
      <Button title="Display Entries" onPress={handleButtonPress} />;
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "whitesmoke",
  },
});

export default FormDetail;
