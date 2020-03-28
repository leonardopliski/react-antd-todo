import React from 'react';
import { Row, Col, Card } from 'antd';

import { Todo } from 'store/todo/models/todo.model';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from 'store/todo/actions';
import { RootState } from 'store/todo/reducers';
import { AddTodoForm } from 'components/AddTodoForm';
import { TodoList } from 'components/TodoList';
import { message } from 'antd';

interface TodosContainerProps {}

export const TodosContainer: React.FunctionComponent<TodosContainerProps> = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleFormSubmit = (todo: Todo): void => {
    dispatch(addTodo(todo));
    message.success('Todo added!');
  };

  const handleRemoveTodo = (todo: Todo): void => {
    dispatch(removeTodo(todo));
    message.warn('Todo removed!');
  };

  const handleTodoToggle = (todo: Todo): void => {
    dispatch(toggleTodo(todo));
    message.info('Todo state updated!');
  };

  return (
    <Row justify="center" align="middle">
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <AddTodoForm onFormSubmit={handleFormSubmit} />

        <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleTodoToggle}
          />
        </Card>
      </Col>
    </Row>
  );
};
