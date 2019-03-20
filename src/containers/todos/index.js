import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Card } from "antd";

// importing todo components
import AddTodoForm from "../../components/Todos/AddTodoForm";
import TodoList from "../../components/Todos/TodoList";

// importing our todo's action's
import { todoActions } from "../../actions";

const TodosContainer = ({ todos, addTodo, removeTodo, toggleTodo }) => {
  // form submit handler to add a todo
  const handleformSubmit = todo => addTodo(todo);

  // Todo removal handler
  const handleTodoRemoval = todo => removeTodo(todo);

  // Todo toggle handler
  const handleTodoToggle = todo => toggleTodo(todo);

  return (
    <Row type="flex" justify="center" align="middle">
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
