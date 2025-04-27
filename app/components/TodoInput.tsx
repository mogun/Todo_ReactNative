import React, { useState } from 'react';

import { Alert, StyleSheet } from 'react-native';
import { Button, Surface, TextInput } from 'react-native-paper';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleTextChange = (text: string) => {
    if (text.length > 50) {
      Alert.alert('Todo must be less than 50 characters');
      return;
    }
    setText(text);
  };

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
  };

  return (
    <Surface style={styles.container} elevation={0}>
      <Surface style={styles.inputContainer} elevation={0}>
        <TextInput
          mode="outlined"
          value={text}
          onChangeText={handleTextChange}
          placeholder="Add a new todo"
          maxLength={50}
          right={<TextInput.Affix text={`${text.length}/50`} />}
          style={styles.input}
          autoCorrect={false}
          onSubmitEditing={handleAdd}
        />
        <Button
          mode="contained"
          onPress={handleAdd}
          disabled={!text.trim()}
          style={styles.button}
        >
          Add
        </Button>
      </Surface>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
  },
  button: {
    minWidth: 80,
    justifyContent: 'center',
  },
});
