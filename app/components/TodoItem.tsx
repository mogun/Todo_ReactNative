import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo,
  onToggle: (id: string) => void,
  onDelete: (id: string) => void,
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, onToggle, onDelete}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggle(todo.id)}>
        <Text style={[styles.text, todo.completed && styles.completed]}>{todo.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

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
});
