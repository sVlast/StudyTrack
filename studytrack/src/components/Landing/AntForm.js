import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import './AntForm.css';
import {auth} from "../../util/firebase.js";

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const history = useHistory();
  const StyledForm = styled(Form)`
  .ant-form-inline{
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
}
`;
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    auth.signInWithEmailAndPassword(values.email, values.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(userCredential);
    history.push("/Dashboard");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

    
    
    console.log('Finish:', values);
  };

  return (
    <StyledForm form={form} name="horizontal_login" layout="inline" alignment="center-align" onFinish={onFinish}>
      <Form.Item
        name="email"
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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
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
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </StyledForm>
  );
};

export default HorizontalLoginForm;