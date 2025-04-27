import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import { Divider, List, Surface, Text } from 'react-native-paper';

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
    <Surface style={styles.container} elevation={0}>
      <TodoInput onAdd={onAdd} />
      <Divider />
      {todos.length === 0 ? (
        <Text style={styles.noTodos}>No todos yet</Text>
      ) : (
        <ScrollView>
          <List.Section>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </List.Section>
        </ScrollView>
      )}
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  noTodos: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});
