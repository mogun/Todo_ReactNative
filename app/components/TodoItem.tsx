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
      style={styles.listItem}
      left={_ => (
        <IconButton
          icon={
            todo.completed ? 'check-circle' : 'checkbox-blank-circle-outline'
          }
          selected={todo.completed}
          onPress={() => onToggle(todo.id)}
          size={20}
        />
      )}
      right={_ => (
        <IconButton
          icon="delete"
          iconColor="#0088ff"
          onPress={() => onDelete(todo.id)}
          size={20}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
  listItem: {
    paddingVertical: 4,
    paddingLeft: 20,
  },
});
