import React from "react";
import PropTypes from "prop-types";

import { List } from "antd";

import TodoItem from "../TodoItem";

const TodoList = props => (
  <List
    locale={{
      emptyText: "There's nothing to do :("
    }}
    dataSource={props.todos}
    renderItem={todo => (
      <TodoItem
        todo={todo}
        onTodoToggle={props.onTodoToggle}
        onTodoRemoval={props.onTodoRemoval}
      />
    )}
  />
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onTodoRemoval: PropTypes.func.isRequired
};

export default TodoList;
