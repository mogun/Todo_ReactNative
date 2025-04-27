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
      titleStyle={[styles.title, todo.completed && styles.completed]}
      left={_ => (
        <IconButton
          icon={
            todo.completed ? 'check-circle' : 'checkbox-blank-circle-outline'
          }
          selected={todo.completed}
          onPress={() => onToggle(todo.id)}
        />
      )}
      right={_ => (
        <IconButton
          icon="delete"
          iconColor="#F44336"
          onPress={() => onDelete(todo.id)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
