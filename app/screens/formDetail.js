import React, { useEffect, useState } from "react";
import { Button, FlatList, View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/listItem";
import routes from "../navigation/routes";
import formApi from "../httpApi/formService";

function FormDetail({ navigation, route }) {
  const [fields, setFields] = useState([]);

  const { sourceId, formId } = route.params;

  const loadFormFields = async () => {
    try {
      const response = await formApi.getFormFields(sourceId, formId);
      if (response.data) {
        setFields(response.data.Fields);
      } else {
        console.log("Failed to execute loadFormFields");
      }
    } catch (error) {
      console.log("loadFormFields", error);
    }
  };

  useEffect(() => {
    loadFormFields();
  }, []);

  console.log("fields", fields);
  const handlePress = (item) => {
    console.log("handlePresss", item);
  };

  const handleButtonPress = () => {
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
          keyExtractor={(field) => field.ID}
          renderItem={({ item, index }) => (
            <ListItem
              name={item.Title}
              id={item.ID}
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
