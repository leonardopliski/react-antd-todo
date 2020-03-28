import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';

export const rootReducer = combineReducers({
  todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;
