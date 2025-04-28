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
      <PaperProvider settings={{ rippleEffectEnabled: true }}>
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading ...</Text>
        </SafeAreaView>
      </PaperProvider>
    );
  }

  return (
    <PaperProvider
      theme={{
        colors: {
          primary: '#0088ff',
          secondary: '#03dac6',
          background: '#fff',
        },
      }}
      settings={{
        rippleEffectEnabled: true,
      }}
    >
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
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1a1a1a',
  },
  loadingText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
  },
  errorText: {
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#ffebee',
    padding: 8,
    borderRadius: 4,
  },
});
