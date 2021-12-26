import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoList from "../components/ToDoList";
import { GlobalStyles } from "../lib/constants";
import { Text } from 'react-native-paper'

export default function ToDoListScreen() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.headerText}>To Do List</Text>
      <TodoList />
      <StatusBar style="auto" />
    </View>
  );
}
