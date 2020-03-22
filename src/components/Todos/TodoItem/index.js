import React from "react";
import PropTypes from "prop-types";
import { Tooltip, Tag, List, Button } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Switch } from "antd";

import "./styles.less";

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
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo.id)}
            defaultChecked={todo.completed}
          />
        </Tooltip>

        <Tag color={todo.completed ? "cyan" : "red"} className="todo-tag">
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
