import { todoConstants } from "../constants";

const addTodoSuccess = todo => ({
  type: todoConstants.ADD_TODO_SUCCESS,
  payload: todo
});

const toggleTodoSuccess = id => ({
  type: todoConstants.TOGGLE_TODO_SUCCESS,
  payload: id
});

const removeTodoSuccess = id => ({
  type: todoConstants.REMOVE_TODO_SUCCESS,
  payload: id
});

const addTodo = name =>
  addTodoSuccess({
    id: Math.round(Math.random() * 36 ** 12).toString(36),
    name: name,
    completed: false
  });

const toggleTodo = id => toggleTodoSuccess(id);

const removeTodo = id => removeTodoSuccess(id);

export const todoActions = {
  addTodo,
  removeTodo,
  toggleTodo
};
