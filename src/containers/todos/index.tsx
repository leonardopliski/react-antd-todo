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
  const todos: Todo[] = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();

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
    <Row justify="center" align="middle" gutter={[20, 20]}>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
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
