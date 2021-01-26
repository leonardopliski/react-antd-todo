import React from 'react';
import { Row, Col, Card, PageHeader } from 'antd';

import { ITodo } from 'store/todo/models/todo.model';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodoStatus } from 'store/todo/actions';
import { RootState } from 'store/todo/reducers';
import { AddTodoForm } from 'components/AddTodoForm';
import { TodoList } from 'components/TodoList';
import { message } from 'antd';

import './styles.less';

interface ITodosContainerProps {}

export const TodosContainer: React.FunctionComponent<ITodosContainerProps> = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(addTodo(todo));
    message.success('Todo added!');
  };

  const handleRemoveTodo = (todo: ITodo): void => {
    dispatch(removeTodo(todo));
    message.warn('Todo removed!');
  };

  const handleToggleTodoStatus = (todo: ITodo): void => {
    dispatch(toggleTodoStatus(todo));
    message.info('Todo state updated!');
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add Todo"
          subTitle="To add a todo, just fill the form below and click in add todo."
        />
      </Col>

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
            onTodoToggle={handleToggleTodoStatus}
          />
        </Card>
      </Col>
    </Row>
  );
};
