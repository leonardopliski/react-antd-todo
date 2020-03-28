import { Todo } from '../interfaces/todo.interface';
import { TodoActionTypes } from './todo.actions.types';
import { todoConstants } from '../constants';

export function addTodo(todo: Todo): TodoActionTypes {
  return {
    type: todoConstants.ADD_TODO_SUCCESS,
    payload: todo
  };
}

export function removeTodo(todo: Todo): TodoActionTypes {
  return {
    type: todoConstants.REMOVE_TODO_SUCCESS,
    payload: todo
  };
}

export function toggleTodo(todo: Todo): TodoActionTypes {
  return {
    type: todoConstants.TOGGLE_TODO_SUCCESS,
    payload: todo
  };
}
