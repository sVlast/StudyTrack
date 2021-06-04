import React, { useState } from 'react';
import { Button, Rate, Input, Form } from 'antd';
import { StyledFeedbackModal } from '../../Landing/ModalStyle';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

const FeedbackModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const { TextArea } = Input;

    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };

    const FormItem = Form.Item;

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

      function onOk(values) {
          const grade = values.grade
          const comment = values.comment
          console.log("Povratne informacije: ", grade, comment)
      }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Modal
            </Button>
            <StyledFeedbackModal
                title=" "
                centered
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={'55vw'}
                footer={null}
            >
                <img src="/images/ST_Logo.png" alt="logo"></img>
                <h2>Evaluate the lecture</h2>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    onFinish={onOk}
                >
                    <Form.Item name="grade">
                        <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />            
                    </Form.Item>
                    <p>Have any more comments?</p>
                    <p>Write them below:</p>
                    <Form.Item name="comment">
                        <TextArea rows={6} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </StyledFeedbackModal>
        </>
    );
};

export default FeedbackModal;