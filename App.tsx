import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TodoList } from './app/components/TodoList';
import { useState, useEffect } from 'react';
import { Todo } from './app/types/todo';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TODOS_STORAGE_KEY = '@todos';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = await AsyncStorage.getItem(TODOS_STORAGE_KEY);
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }
    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      await AsyncStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }
    saveTodos();
  }, [todos]);

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
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
