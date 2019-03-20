import { todoConstants } from "../constants";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case todoConstants.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.concat(action.payload)
      });
    case todoConstants.TOGGLE_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      });
    case todoConstants.REMOVE_TODO_SUCCESS:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};
