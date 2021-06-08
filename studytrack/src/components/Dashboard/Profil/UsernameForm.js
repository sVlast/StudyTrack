import React from 'react';
import { Form, Input, Button } from 'antd';
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 6,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 6,
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
            layout="vertical"

        >
            <Form.Item
                label="Username:"
                name="username"
                rules={[
                    {
                        required: false,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input defaultValue="Username" />
            </Form.Item>

            <Form.Item
                label="Nickname:"
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