import React from 'react';
import {
    List,
} from 'antd'

import TodoItem from './TodoItem'

const TodoList = props => (
    <List 
        locale = {{ 
            emptyText: "There's nothing to do :(" 
        }} 
        dataSource= { 
            props.todos 
        } 
        renderItem= { todo => (
            <TodoItem 
                todo          = { todo } 
                onTodoToggle  = { props.onTodoToggle } 
                onTodoRemoval = { props.onTodoRemoval } 
            />
        )} 
    /> 
);

export default TodoList;