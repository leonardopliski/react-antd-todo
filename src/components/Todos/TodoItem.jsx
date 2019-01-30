import React from 'react';
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
            <div>
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
                    style={{ marginLeft: 10 }}
                >
                    { todo.completed ? <Icon type="check" /> : '-' }
                </Tag> 
                <div 
                    style={{ display: 'inline-block', textTransform: 'capitalize' }}
                > 
                    { todo.completed ? <del>{ todo.name }</del> : todo.name }
                </div>
            </div>
        </List.Item>
    );
};

export default TodoItem;