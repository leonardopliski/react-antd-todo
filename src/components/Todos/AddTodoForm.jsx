import React from 'react'
import {
    Form, 
    Icon, 
    Row, 
    Col,
    Button,
    Input
} from 'antd'
import './styles.scss'

const AddTodoForm = (props) => {

    const {
        getFieldDecorator
    } = props.form;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    }

    return (
        <Form 
            onSubmit={e => handleSubmit(e)} 
            layout="horizontal" 
            className="todo-form"
        >
            <Row gutter={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ 
                                required: true, 
                                message: 'Please, type in the todo name.' 
                            }],
                        })(
                            <Input 
                                prefix={
                                    <Icon 
                                        type="tags" 
                                        className="icon"
                                    />
                                } 
                                style={{ 
                                    display: 'block' 
                                }} 
                                placeholder="What needs to be done?" 
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type="primary" htmlType="submit" block>Add</Button>
                </Col>
            </Row>
        </Form>
        
    );
};

export default Form.create({ name: 'add_todo_form' })(AddTodoForm);