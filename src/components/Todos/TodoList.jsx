import React from 'react';
import {
    List,
    Tooltip,
    Button,
    Icon
} from 'antd'

import TodoItem from './TodoItem'

const TodoList = props => {
    return props.todos ? <List locale={{ emptyText: "There's nothing to do :(" }} dataSource={ props.todos } renderItem={ todo => (
        <List.Item 
            actions={[
                <Tooltip title="Remove Todo">
                    <Button type="danger">
                        <Icon type="delete" />
                    </Button>
                </Tooltip>
            ]}
        >
            <TodoItem todo={ todo } onTodoToggle={ props.onTodoToggle }/>
        </List.Item>
    ) } /> : null
};

export default TodoList;