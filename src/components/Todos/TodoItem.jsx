import React from 'react';
import {
    Checkbox,
    Tooltip,
    Tag,
    Icon
} from 'antd'

const TodoItem = props => {
    const { todo } = props
    
    return (
        <div>
            { 
                todo.completed ? 
                    <div>
                        <Tooltip title="Mark as uncompleted">
                            <Checkbox 
                                defaultChecked={true} 
                                onChange={ () => props.onTodoToggle(todo.id) }
                            >
                            </Checkbox>
                        </Tooltip>
                        <Tag color="green" style={{ marginLeft: 10 }}><Icon type="check" /></Tag> 
                        <div style={{ display: 'inline-block', textTransform: 'capitalize' }}> <del> { todo.name } </del> </div>
                    </div>
                : 
                    <div>
                        <Tooltip title="Mark as completed">
                            <Checkbox 
                                onChange={ () => props.onTodoToggle(todo.id) }
                            >
                            </Checkbox>
                        </Tooltip>
                        <Tag color="volcano" style={{ marginLeft: 10 }}> - </Tag> 
                        <div style={{ display: 'inline-block', textTransform: 'capitalize' }}>
                            { todo.name }
                        </div>
                    </div>
            }
        </div>
    );
};

export default TodoItem;