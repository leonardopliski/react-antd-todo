import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Tooltip, Tag, List, Button } from "antd";

import "./styles.scss";

const TodoItem = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip title="Remove Todo">
          <Button
            className="remove-todo-button"
            type="danger"
            onClick={() => onTodoRemoval(todo.id)}
          >
            X
          </Button>
        </Tooltip>
      ]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tooltip
          title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
        >
          <Checkbox
            defaultChecked={todo.completed}
            onChange={() => onTodoToggle(todo.id)}
          />
        </Tooltip>

        <Tag color={todo.completed ? "green" : "volcano"} className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoRemoval: PropTypes.func.isRequired,
  onTodoToggle: PropTypes.func.isRequired
};

export default TodoItem;
