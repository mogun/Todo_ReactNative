import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from '../types/todo';

export const STORAGE_KEYS = {
  TODOS: '@todos',
} as const;

export const storage = {
  async saveTodos(todos: Todo[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
    } catch (error) {
      console.error('Todoの保存に失敗しました:', error);
      throw new Error('Todoの保存に失敗しました');
    }
  },

  async loadTodos(): Promise<Todo[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.TODOS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Todoの読み込みに失敗しました:', error);
      throw new Error('Todoの読み込みに失敗しました');
    }
  },
};
