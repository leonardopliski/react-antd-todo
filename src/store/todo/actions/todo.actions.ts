import { ITodo } from '../models/todo.model';
import { TodoActionTypes } from './todo.actions.types';
import { TODO_ACTION_TYPES } from '../constants';

export function addTodo(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
    payload: todo,
  };
}

export function removeTodo(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
    payload: todo,
  };
}

export function toggleTodoStatus(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS,
    payload: todo,
  };
}
