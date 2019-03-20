import React from 'react';
import PropTypes from 'prop-types';
import {
    Checkbox,
    Tooltip,
    Tag,
    Icon,
    List,
    Button
} from 'antd'

const TodoItem = props => {
    const { todo } = props
    
    return (
        <List.Item 
            actions={[
                <Tooltip title="Remove Todo">
                    <Button type="danger" onClick={ () => props.onTodoRemoval(todo.id) }>
                        <Icon type="delete" />
                    </Button>
                </Tooltip>
            ]}
        >
            <div className="todo-item">
            
                <Tooltip title={ todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}>
                    <Checkbox 
                        defaultChecked={ todo.completed } 
                        onChange={ 
                            () => props.onTodoToggle(todo.id) 
                        }
                    >
                    </Checkbox>
                </Tooltip>

                <Tag 
                    color={ todo.completed ? 'green' : 'volcano' } 
                    className="todo-tag"
                >
                    { todo.completed ? <Icon type="check" /> : '-' }
                </Tag> 

                <div className="todo-name"> 
                    { todo.completed ? <del>{ todo.name }</del> : todo.name }
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