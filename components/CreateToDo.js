import React from "react";
import { View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { GlobalStyles } from "../lib/constants";

export default function CreateToDo({ navigation, state, setState, onPressFunc }) {
  return (
    <View style={[GlobalStyles.verticallySpaced, { marginTop: 20, marginBottom: 50, marginHorizontal: 10 }]}>
      <Text style={GlobalStyles.subHeaderText}>
        Create a new To Do
      </Text>
      <TextInput
        label="New todo"
        left={ <TextInput.Icon name="view-list" /> }
        onChangeText={(text) => setState(text)}
        value={state}
        mode="outlined"
      />
      <Button
        mode="contained"
        style={{ height: 50, paddingTop: 7, marginTop: 10 }}
        onPress={() => {
          onPressFunc(state)
          navigation.navigate("To Do")
        }}>
        Add
      </Button>
    </View>
  )
}