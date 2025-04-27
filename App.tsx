import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { TodoList } from './app/components/TodoList';
import { useTodos } from './app/hooks/useTodos';

export default function App() {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onAdd={addTodo}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  errorText: {
    color: '#ff3b30',
    textAlign: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffebeb',
  },
});
