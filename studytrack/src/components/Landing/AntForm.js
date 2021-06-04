import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./AntForm.css";
import firebase, { auth } from "../../util/firebase.js";
//import "firebase/auth";
import { StyledLogForm } from "./ModalStyle";

const HorizontalLoginForm = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
    const history = useHistory();

    useEffect(() => {
        // console.log("firebase auth()", firebase.auth());
        // console.log("firebase auth", firebase.auth);
        // console.log("firebase.auth.Auth", firebase.auth.Auth);
        // console.log("firebase.auth().Auth", firebase.auth().Auth);
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        auth.signInWithEmailAndPassword(values.email, values.password)
            .then((userCredential) => {
                // Signed in
                console.log("User Signed in");
                var user = userCredential.user;
                history.push("/dashboard");
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    };

    return (
        <StyledLogForm
            form={form}
            name="horizontal_login"
            layout="inline"
            alignment="center-align"
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your E-mail!",
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form
                                .getFieldsError()
                                .filter(({ errors }) => errors.length).length
                        }
                    >
                        Log in
                    </Button>
                )}
            </Form.Item>
        </StyledLogForm>
    );
};

export default HorizontalLoginForm;
