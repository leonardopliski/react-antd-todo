import { todoConstants } from '../constants';
import { message } from 'antd';
import { Todo } from '../interfaces/todo.interface';
import { Dispatch } from 'react';

const addTodoSuccess = (todo: Todo) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: todoConstants.ADD_TODO_SUCCESS,
    payload: todo
  });

  message.success('Todo added!');
};

const toggleTodoSuccess = (id: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: todoConstants.TOGGLE_TODO_SUCCESS,
    payload: id
  });

  message.info('Todo state updated!');
};

const removeTodoSuccess = (id: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: todoConstants.REMOVE_TODO_SUCCESS,
    payload: id
  });
  message.warn('Todo removed!');
};

const addTodo = (name: string) =>
  addTodoSuccess({
    id: Math.round(Math.random() * 36 ** 12).toString(36),
    completed: false,
    name
  });

const toggleTodo = (id: string) => toggleTodoSuccess(id);

const removeTodo = (id: string) => removeTodoSuccess(id);

export const todoActions = {
  addTodo,
  removeTodo,
  toggleTodo
};
