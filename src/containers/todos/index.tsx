import React from 'react';
import { Row, Col, Card } from 'antd';

import { Todo } from '../../store/interfaces/todo.interface';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { AddTodoForm } from '../../components/Todos/AddTodoForm';
import { TodoList } from '../../components/Todos/TodoList';
import { message } from 'antd';

interface TodosContainerProps {}

const TodosContainer: React.FunctionComponent<TodosContainerProps> = () => {
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

export default TodosContainer;
