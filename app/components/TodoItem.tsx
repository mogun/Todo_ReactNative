import React from 'react';

import { StyleSheet } from 'react-native';
import { IconButton, List } from 'react-native-paper';

import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <List.Item
      title={todo.text}
      left={() => (
        <IconButton
          icon={todo.completed ? 'check-circle' : 'circle-outline'}
          onPress={() => onToggle(todo.id)}
        />
      )}
      right={() => (
        <IconButton icon="delete" onPress={() => onDelete(todo.id)} />
      )}
      titleStyle={todo.completed ? styles.completed : undefined}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    color: 'red',
  },
  toggleContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
