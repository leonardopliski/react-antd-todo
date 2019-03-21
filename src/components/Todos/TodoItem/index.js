import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Tooltip, Tag, Icon, List, Button } from "antd";

import "./styles.scss";

const TodoItem = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip title="Remove Todo">
          <Button type="danger" onClick={() => onTodoRemoval(todo.id)}>
            <Icon type="delete" />
          </Button>
        </Tooltip>
      ]}
      className="list-item"
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
          {todo.completed ? <Icon type="check" /> : "-"}
        </Tag>

        <div className="todo-name">
          {todo.completed ? <del>{todo.name}</del> : todo.name}
        </div>
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
