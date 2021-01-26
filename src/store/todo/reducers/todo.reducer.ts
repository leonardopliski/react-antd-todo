import { TODO_ACTION_TYPES } from '../constants';
import { ITodo } from '../models/todo.model';
import { TodoActionTypes } from '../actions/todo.actions.types';
import { v1 as uuidV1 } from 'uuid';

interface ITodoReducerInterface {
  todos: ITodo[];
}

export const initialState: ITodoReducerInterface = {
  todos: [],
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action?.type) {
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.concat({
          ...action.payload,
          ...{
            id: action.payload.id ?? uuidV1(),
          },
        }),
      });
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.map((todo: ITodo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      });
    case TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS:
      return {
        todos: state.todos.filter(
          (todo: ITodo) => todo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
