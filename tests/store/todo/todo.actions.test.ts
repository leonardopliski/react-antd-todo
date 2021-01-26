import { TODO_ACTION_TYPES } from '../../../src/store/todo/constants';
import { ITodo } from '../../../src/store/todo/models/todo.model';
import {
  addTodo,
  removeTodo,
  toggleTodoStatus,
} from '../../../src/store/todo/actions/todo.actions';

describe('actions', () => {
  let targetTodo: ITodo;

  beforeAll(() => {
    targetTodo = {
      name: 'Schedule a meeting for 2:00 PM',
      completed: false,
    };
  });

  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
      payload: targetTodo,
    };
    expect(addTodo(targetTodo)).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
      payload: targetTodo,
    };
    expect(removeTodo(targetTodo)).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo status', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS,
      payload: targetTodo,
    };
    expect(toggleTodoStatus(targetTodo)).toEqual(expectedAction);
  });
});
