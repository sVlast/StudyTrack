import React from 'react';
import { Form, Input, Button } from 'antd';
const layout = {
    labelCol: {
        span: 2,
    },
    wrapperCol: {
        span: 5,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 5,
    },
};

const UsernameForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: false,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input defaultValue="Username"/>
            </Form.Item>

            <Form.Item
                label="Nickname"
                name="nickname"
                rules={[
                    {
                        required: false,
                        message: 'Please input your Nickname!',
                    },
                ]}
            >
                <Input defaultValue="Nickname" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    );
};


export default UsernameForm;