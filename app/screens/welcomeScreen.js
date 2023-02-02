import React, { useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Screen from "../components/Screen";
import settings from "../config/settings";
import routes from "../navigation/routes";

const ITEMS = [
  { label: "Wufoo bhyc.rcsail", value: "bhyc.rcsail" },
  { label: "Wufoo Scorer", value: "scorer" },
];

export default function WelcomeScreen({ navigation }) {
  const [source, setSource] = useState(ITEMS[0].value);

  const handleValueChange = (value, position) => {
    console.log("handleValueChange");
    console.log(value, position);
    setSource(value);
  };

  const handlePress = (navigation, source) => {
    navigation.navigate(routes.FORMS_LIST, {
      source: source,
      settings: settings.getSetting(source),
    });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text>Please select data source</Text>
        <Picker
          selectedValue={source}
          onValueChange={handleValueChange}
          style={styles.picker}
          itemStyle={styles.itemStyle}
          mode={Platform.OS === "android" ? "dropdown" : ""}
        >
          <Picker.Item label={ITEMS[0].label} value={ITEMS[0].value} />
          <Picker.Item label={ITEMS[1].label} value={ITEMS[1].value} />
        </Picker>
        <Button
          style={styles.button}
          onPress={() => handlePress(navigation, source)}
          title="Continue"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    color: "darkblue",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
  },
  picker: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 4,
    padding: 15,
    marginVertical: 15,
    backgroundColor: "lightsteelblue",
  },
  itemStyle: {
    color: "darkred",
    fontSize: 30,
    textAlign: "center",
  },
});
