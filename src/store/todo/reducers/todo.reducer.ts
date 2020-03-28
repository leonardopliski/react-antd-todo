import { TODO_CONSTANTS } from 'store/todo/constants';
import { Todo } from 'store/todo/models/todo.model';
import { TodoActionTypes } from 'store/todo/actions/todo.actions.types';
import { v1 as uuidV1 } from 'uuid';

interface TodoReducerInterface {
  todos: Todo[];
}

const initialState: TodoReducerInterface = {
  todos: []
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case TODO_CONSTANTS.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.concat({
          ...action.payload,
          ...{
            id: uuidV1()
          }
        })
      });

    case TODO_CONSTANTS.TOGGLE_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      });
    case TODO_CONSTANTS.REMOVE_TODO_SUCCESS:
      return {
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};
