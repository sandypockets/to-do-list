import { View } from 'react-native'
import { useState } from "react";
import { supabase } from "../lib/initSupabase";
import { useUser } from "../components/UserContext";
import CreateToDo from "../components/CreateToDo";

export default function CreateToDoScreen({ route, navigation }) {
  const { user } = useUser()
  const { todos, setTodos } = route.params
  const [newTaskText, setNewTaskText] = useState('')

  const addTodo = async (taskText) => {
    const task = taskText.trim()
    console.log('New Task: ', task)
    if (task.length) {
      const { data: todo, error } = await supabase
        .from('todos')
        .insert({ task, user_id: user.id })
        .single()
      if (error) console.log(error.message)
      else {
        setTodos([todo, ...todos])
        setNewTaskText('')
      }
    }
  }

  return (
    <View>
      <CreateToDo navigation={navigation} state={newTaskText} setState={setNewTaskText} onPressFunc={addTodo} />
    </View>
  )
}