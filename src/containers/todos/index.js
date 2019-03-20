import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";
import AddTodoForm from "../../components/Todos/AddTodoForm";
import TodoList from "../../components/Todos/TodoList";

// importing our todo's action's
import { todoActions } from "../../actions";

const TodosContainer = props => {
  // form submit handler to add a todo
  const handleformSubmit = todo => props.addTodo(todo);

  // Todo state of completed / uncompleted handler
  const handleTodoToggle = todo => props.toggleTodo(todo);

  // Todo removal handler
  const handleTodoRemoval = todo => props.removeTodo(todo);

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
            todos={props.todos}
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

const mapDispatchToProps = {
  addTodo: todoActions.addTodo,
  toggleTodo: todoActions.toggleTodo,
  removeTodo: todoActions.removeTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
