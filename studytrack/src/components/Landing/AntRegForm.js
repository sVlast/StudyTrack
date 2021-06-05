import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import "./AntRegForm.css";
import { auth } from "../../util/firebase.js";
import { StyledRegForm } from "./ModalStyle";

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
  const [hidden, setHidden] = useState(true);
  const history = useHistory();

  const onFinish = (values) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        history.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };

  const onChange = () => {};

  var myInput = document.getElementById("psw");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");

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
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        pattern="(?=.*[0-9a-zA-Z]).{6,}"
        title="The password must contain at least 6 or more characters"
        rules={[
          {
            required: true,
            message: "Please input a password with 6 or more characters!",
            min: 6,
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="checkbox" valuePropName="checked" noStyle>
        <Checkbox onChange={() => setHidden(!hidden)}>
          Sign up as Professor
        </Checkbox>
      </Form.Item>

      <Form.Item hidden={hidden} label="Code">
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
