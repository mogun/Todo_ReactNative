import { useEffect, useState } from 'react';

import uuid from 'react-native-uuid';

import { Todo } from '../types/todo';
import { storage } from '../utils/storage';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const loadedTodos = await storage.loadTodos();
      setTodos(loadedTodos);
      setError(null);
    } catch (_e) {
      setError('Todoの読み込みに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (text: string) => {
    const newTodo: Todo = {
      id: uuid.v4().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    try {
      const updatedTodos = [newTodo, ...todos];
      await storage.saveTodos(updatedTodos);
      setTodos(updatedTodos);
      setError(null);
    } catch (_e) {
      setError('Todoの追加に失敗しました');
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      await storage.saveTodos(updatedTodos);
      setTodos(updatedTodos);
      setError(null);
    } catch (_e) {
      setError('Todoの更新に失敗しました');
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      await storage.saveTodos(updatedTodos);
      setTodos(updatedTodos);
      setError(null);
    } catch (_e) {
      setError('Todoの削除に失敗しました');
    }
  };

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
