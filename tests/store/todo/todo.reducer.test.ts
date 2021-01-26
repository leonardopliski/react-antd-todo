import { removeTodo, toggleTodoStatus } from '../../../src/store/todo/actions';
import {
  initialState,
  todoReducer,
} from '../../../src/store/todo/reducers/todo.reducer';

import { createTestTodo } from './factories/todo.factory';

describe('todo reducer', () => {
  it('should handle addTodo', () => {
    expect(
      todoReducer(
        initialState,
        createTestTodo({
          id: '440351',
          name: 'This is a test todo',
          completed: true,
        })
      )
    ).toMatchSnapshot();
  });

  it('should handle removeTodo', () => {
    const createdTodoAction = createTestTodo({});

    let todoReducerState = todoReducer(initialState, createdTodoAction);

    expect(todoReducerState).toBeDefined();
    expect(todoReducerState.todos).toHaveLength(1);

    todoReducerState = todoReducer(
      initialState,
      removeTodo(createdTodoAction.payload)
    );

    expect(todoReducerState.todos).toHaveLength(0);
  });

  it('should handle toggleTodoStatus', () => {
    const createTodoAction = createTestTodo({
      id: '1234',
    });

    const state = todoReducer(initialState, createTodoAction);

    const todoReducerState = todoReducer(
      state,
      toggleTodoStatus(createTodoAction.payload)
    );

    expect(todoReducerState.todos[0].completed).toBe(
      !createTodoAction.payload.completed
    );
  });
});
