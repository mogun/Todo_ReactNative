import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { Todo } from '../types/todo';
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd: (text: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
  onAdd,
}) => {
  return (
    <View style={styles.container}>
      <TodoInput onAdd={onAdd} />
      {todos.length === 0 ? (
        <Text style={styles.noTodos}>No todos yet</Text>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
  noTodos: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});
