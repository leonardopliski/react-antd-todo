import { todoConstants } from '../constants';
import { Todo } from '../interfaces/todo.interface';
import { TodoActionTypes } from '../actions/todo.actions.types';
import { v1 as uuidV1 } from 'uuid';

interface TodoReducerInterface {
  todos: Todo[];
}

const initialState: TodoReducerInterface = {
  todos: []
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case todoConstants.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.concat({
          ...action.payload,
          ...{
            id: uuidV1()
          }
        })
      });

    case todoConstants.TOGGLE_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      });
    case todoConstants.REMOVE_TODO_SUCCESS:
      return {
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};
