import React from 'react';
import {
    List
} from 'antd'

const TodoList = props => {
    return props.todos ? <List dataSource={props.todos} renderItem={item => (<List.Item>{ item }</List.Item>)} /> : null
};

export default TodoList;