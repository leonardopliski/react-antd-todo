import { Todo } from 'store/todo/models/todo.model';
import { TodoActionTypes } from 'store/todo/actions/todo.actions.types';
import { TODO_CONSTANTS } from 'store/todo/constants';

export function addTodo(todo: Todo): TodoActionTypes {
  return {
    type: TODO_CONSTANTS.ADD_TODO_SUCCESS,
    payload: todo
  };
}

export function removeTodo(todo: Todo): TodoActionTypes {
  return {
    type: TODO_CONSTANTS.REMOVE_TODO_SUCCESS,
    payload: todo
  };
}

export function toggleTodo(todo: Todo): TodoActionTypes {
  return {
    type: TODO_CONSTANTS.TOGGLE_TODO_SUCCESS,
    payload: todo
  };
}
