import React, { useState } from "react";
import { Button, Rate, Input, Form } from "antd";
import { StyledFeedbackModal } from "../../Landing/ModalStyle";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import firebase from "../../../util/firebase.js";
import useDatabaseContext from "../../../contexts/DatabaseContext.js";

const FeedbackModal = ({ isVisible, onClose, taskID, userID }) => {
    const [form] = Form.useForm();
    console.log(form.getFieldsValue());
    const { TextArea } = Input;

    const taskRef = firebase.database().ref("Users/" + userID + "/Task");

    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };

    const FormItem = Form.Item;

    const onFinish = (values) => {
        //console.log("Success:", values, taskRef);

        taskRef.child(taskID).update(values);
        //console.log("feedbackModal", taskID, userID);
        onClose();
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    function onOk(values) {
        const grade = values.grade;
        const comment = values.comment;
        console.log("Povratne informacije: ", grade, comment);
    }

    return (
        <StyledFeedbackModal
            title=" "
            centered
            visible={isVisible}
            onCancel={onClose}
            width={"55vw"}
            footer={null}
            maskClosable={false}
            closable={false}
            destroyOnClose
        >
            <img src="/images/ST_Logo.png" alt="logo"></img>
            <h2>Evaluate the lecture</h2>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
                initialValues={{ comment: "", grade: 3 }}
                preserve={false}
            >
                <Form.Item
                    name="grade"
                    rules={[
                        { required: true, message: "This field is required!" },
                    ]}
                >
                    <Rate character={({ index }) => customIcons[index + 1]} />
                </Form.Item>
                <p>Have any more comments?</p>
                <p>Write them below:</p>
                <Form.Item
                    name="comment"
                    rules={[
                        { required: true, message: "This field is required!" },
                    ]}
                >
                    <TextArea rows={6} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </StyledFeedbackModal>
    );
};

export default FeedbackModal;
