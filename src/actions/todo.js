import { todoConstants } from "../constants";
import { message } from "antd";

const addTodoSuccess = todo => dispatch => {
  dispatch({
    type: todoConstants.ADD_TODO_SUCCESS,
    payload: todo
  });

  message.success("Todo added!");
};

const toggleTodoSuccess = id => dispatch => {
  dispatch({
    type: todoConstants.TOGGLE_TODO_SUCCESS,
    payload: id
  });

  message.info("Todo state updated!");
};

const removeTodoSuccess = id => dispatch => {
  dispatch({
    type: todoConstants.REMOVE_TODO_SUCCESS,
    payload: id
  });
  message.warn("Todo removed!");
};

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
