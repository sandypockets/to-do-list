import React, {useState} from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoList from "../components/ToDoList";
import { GlobalStyles } from "../lib/constants";
import { Button, Text } from 'react-native-paper';

export default function ToDoListScreen({ navigation }) {
  const [todos, setTodos] = useState([])

  return (
    <View style={GlobalStyles.container}>
      <Button
        onPress={() => navigation.navigate('CreateToDo', {
          todos,
          setTodos
        })}
        mode="contained"
      >
        New
      </Button>
      <Text style={GlobalStyles.headerText}>To Do List</Text>
      <TodoList navigation={navigation} todos={todos} setTodos={setTodos} />
      <StatusBar style="auto" />
    </View>
  );
}
