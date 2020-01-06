import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Card } from "antd";

import AddTodoForm from "../../components/Todos/AddTodoForm";
import TodoList from "../../components/Todos/TodoList";

import { todoActions } from "../../actions";

const TodosContainer = ({ todos, addTodo, removeTodo, toggleTodo }) => {
  const handleformSubmit = todo => addTodo(todo);

  const handleTodoRemoval = todo => removeTodo(todo);

  const handleTodoToggle = todo => toggleTodo(todo);

  return (
    <Row type="flex" justify="center" align="middle">
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <AddTodoForm onFormSubmit={handleformSubmit} />

        <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoToggle={handleTodoToggle}
            onTodoRemoval={handleTodoRemoval}
          />
        </Card>
      </Col>
    </Row>
  );
};

TodosContainer.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo: todoActions.addTodo,
      removeTodo: todoActions.removeTodo,
      toggleTodo: todoActions.toggleTodo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
