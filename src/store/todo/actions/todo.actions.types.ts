import { TODO_ACTION_TYPES } from 'store/todo/constants';
import { ITodo } from 'store/todo/models/todo.model';

interface IAddTodoAction {
  type: typeof TODO_ACTION_TYPES.ADD_TODO_SUCCESS;
  payload: ITodo;
}

interface IToggleTodoAction {
  type: typeof TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS;
  payload: ITodo;
}

interface IRemoveTodoAction {
  type: typeof TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS;
  payload: ITodo;
}

export type TodoActionTypes =
  | IAddTodoAction
  | IRemoveTodoAction
  | IToggleTodoAction;
