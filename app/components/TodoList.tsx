import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";
import { TodoInput } from "./TodoInput";
interface TodoListProps {
  todos: Todo[],
  onToggle: (id: string) => void,
  onDelete: (id: string) => void,
  onAdd: (text: string) => void,
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onDelete, onAdd}) => {
  return (
    <View style={styles.container}>
      <TodoInput onAdd={onAdd} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
