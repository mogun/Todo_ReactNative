import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TodoList } from './app/components/TodoList';
import { useState } from 'react';
import { Todo } from './app/types/todo';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleToggle = (id: string) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleAdd = (text: string) => {
    setTodos([...todos, {id: uuidv4(), text, completed: false}]);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
