import React from 'react';
import { Tooltip, Tag, List, Button } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

import './styles.less';
import { Todo } from '../../../store/interfaces/todo.interface';

interface TodoItemProps {
  todo: Todo;
  onTodoRemoval: (todo: Todo) => void;
  onTodoToggle: (todo: Todo) => void;
}

export const TodoItem: React.StatelessComponent<TodoItemProps> = ({
  todo,
  onTodoRemoval,
  onTodoToggle
}) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Tooltip title="Remove Todo">
          <Button
            className="remove-todo-button"
            type="danger"
            onClick={() => onTodoRemoval(todo)}
          >
            X
          </Button>
        </Tooltip>
      ]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};
