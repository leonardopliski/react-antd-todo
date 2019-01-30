import React from 'react';
import { 
    Row, 
    Col, 
    Card
} from 'antd';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

const Todos = (props) => {
    return (
        <Row type="flex" justify="center" align="middle" >
            <Col
                xs={{
                    span: 24
                }}
                sm={{
                    span: 24
                }}
                md={{
                    span: 21
                }}
                lg={{
                    span: 20
                }}
                xl={{
                    span: 18
                }}
            >
                <AddTodoForm />
                <Card title="Todo List" >
                    <TodoList todos={props.todos} />
                </Card>
            </Col>
        </Row>
    );
};

export default Todos;