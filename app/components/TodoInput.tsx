import React, { useState } from 'react';

import { Alert, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

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
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        // style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder="Add a new todo"
        maxLength={50}
        returnKeyType="done"
        enablesReturnKeyAutomatically
        onSubmitEditing={handleAdd}
        autoCorrect={false}
        right={<TextInput.Affix text={`${text.length}/50`} />}
      />
      <Button mode="contained" onPress={handleAdd} disabled={!text.trim()}>
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});
