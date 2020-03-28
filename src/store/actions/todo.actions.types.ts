import { todoConstants } from '../constants';
import { Todo } from '../interfaces/todo.interface';

interface AddTodoAction {
  type: typeof todoConstants.ADD_TODO_SUCCESS;
  payload: Todo;
}

interface ToggleTodoAction {
  type: typeof todoConstants.TOGGLE_TODO_SUCCESS;
  payload: Todo;
}

interface RemoveTodoAction {
  type: typeof todoConstants.REMOVE_TODO_SUCCESS;
  payload: Todo;
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | ToggleTodoAction;
