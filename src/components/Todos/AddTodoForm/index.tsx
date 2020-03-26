import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

import './styles.less';
import { Store, AnyAction } from 'redux';

interface AddTodoFormProps {
  onFormSubmit: (name: string) => void;
}

const AddTodoForm: React.FunctionComponent<AddTodoFormProps> = ({
  onFormSubmit
}) => {
  const [form] = Form.useForm();

  const onFinish = ({ getState }: Store<any, AnyAction>) => {
    console.log(getState());
    // onFormSubmit(todoName);

    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      className="todo-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name={'name'}
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input placeholder="What needs to be done?" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <PlusCircleFilled />
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddTodoForm;
