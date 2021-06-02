import React, { useState } from 'react';
import { Button, Rate, Input } from 'antd';
import HorizontalLoginForm from '../../Landing/LogInModal';
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
                width={'70vw'}
                footer={null}
            >
                <img src="/images/ST_Logo.png" alt="logo"></img>
                <h2>Ocijeni predavanje</h2>
                <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
                <TextArea rows={6} />
                <Button type="primary">Submit</Button>
            </StyledFeedbackModal>
        </>
    );
};

export default FeedbackModal;