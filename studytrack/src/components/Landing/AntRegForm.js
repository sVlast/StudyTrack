import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import './AntRegForm.css';
import { auth } from "../../util/firebase.js";
import { StyledRegForm } from './ModalStyle';


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
};

const btnFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 24,
            offset: 8,

        },
    },
};


const RegistrationForm = () => {
    const [form] = Form.useForm();
    const history = useHistory();

    const onFinish = (values) => {
        auth.createUserWithEmailAndPassword(values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                history.push("/dashboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
            });

    };


    return (
        <StyledRegForm
            {...formItemLayout}
            form={form}
            name="register"
            wrapperCol="left"
            style={{ color: "#fff" }}
            onFinish={onFinish}
            labelAlign="left"
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="checkbox" valuePropName="checked" noStyle>
                <Checkbox>Checkbox</Checkbox>
            </Form.Item>

            <Form.Item label="Input">
                <Input />
            </Form.Item>

            <Form.Item {...btnFormItemLayout}>
                <Button type="normal" htmlType="submit">
                    Register
        </Button>
            </Form.Item>
        </StyledRegForm>
    );
};

export default RegistrationForm;
