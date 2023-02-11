import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/listItem";
import formApi from "../httpApi/formService";
import mapper from "../mapServices/mapEntries";

function FormEntries({ route }) {
  const { sourceId, formId, fields } = route.params;

  const [entries, setEntries] = useState([]);

  const loadFormEntries = async () => {
    try {
      const response = await formApi.getFormEntries(sourceId, formId);
      if (response.data) {
        setEntries(response.data.Entries);
        // if (entries) {
        //   const sw = mapEntries(fields, entries);
        // }
      }
    } catch (error) {
      console.log("loadFormEntries", error);
    }
  };

  useEffect(() => {
    loadFormEntries();
  }, []);

  console.log("entries", entries);
  const handlePress = (item) => {
    console.log("handlePresss", item);
    const sw = mapper.mapEntries(fields, entries);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={entries}
          keyExtractor={(entry) => entry.EntryId}
          renderItem={({ item, index }) => (
            <ListItem
              name={item.DateCreated}
              id={item.EntryId}
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
