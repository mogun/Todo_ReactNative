import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

interface TodoInputProps {
  onAdd: (text: string) => void,
}

export const TodoInput: React.FC<TodoInputProps> = ({onAdd}) => {
  const [text, setText] = useState('');

  const handleTextChange = (text: string) => {
    if (text.length > 50) {
      Alert.alert('Todo must be less than 50 characters');
      return;
    }
    setText(text);
  }

  const handleAdd = () => {
    const trimmedText = text.trim();
    if (trimmedText.length < 1) {
      Alert.alert('Please enter a todo');
      return;
    }
    if (trimmedText.length > 50) {
      Alert.alert('Todo must be less than 50 characters');
      return;
    }
    onAdd(trimmedText);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder="Add a new todo"
        maxLength={50}
        returnKeyType="done"
        enablesReturnKeyAutomatically
        onSubmitEditing={handleAdd}
        autoCorrect={false}
      />
      <TouchableOpacity style={[styles.addButton, !text.trim() && styles.addButtonDisabled]} onPress={handleAdd} disabled={!text.trim()}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#ccc',
  },
  addButtonText: {
    color: '#fff',
  },
});
