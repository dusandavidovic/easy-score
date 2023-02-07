import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/listItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import formApi from "../httpApi/service";

const FAKEFORMS = [
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

export default function FormsList({ route }) {
  //const getFormApi = useApi(formApi.getForms(route.params.source));
  const [forms, setForms] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://bhycadmin.wufoo.com/api/v3/forms.json",
        {
          auth: {
            username: "Y3VO-26SD-XJBC-RBO4",
            password: "anyPass",
          },
        }
      );
      if (response.data) {
        return response;
      } else {
        console.log("No data returned by request");
      }

      //setForms1(response.data);
    } catch (error) {
      console.log("FormsList.getData", error);
    }
  };

  const loadData = () => {
    getData().then((response) => setForms(response.data));
  };

  useEffect(() => {
    loadData();
    //setForms1(response.data);
    //getFormApi.request();
  }, []);

  // const { data, error } = getFormApi;
  // console.log("FormList", data, error);

  const renderSeparator = () => <View style={styles.separator} />;

  const handlePress = (item) => {
    console.log("handlePresss", item);
  };

  const handleButtonPress = () => {
    console.log("handleButtonPresss");
    console.log(forms);
    //console.log(getFormApi.data);
  };

  return (
    <Screen>
      <View style={styles.screen}>
        <FlatList
          data={FAKEFORMS}
          keyExtractor={(form) => form.hash}
          renderItem={({ item, index }) => (
            <ListItem
              id={item.hash}
              name={item.name}
              description={item.description}
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
