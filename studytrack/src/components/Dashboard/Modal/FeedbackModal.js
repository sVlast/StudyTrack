import React, { useState } from 'react';
import { Button } from 'antd';
import HorizontalLoginForm from '../../Landing/LogInModal';
import { StyledFeedbackModal } from '../../Landing/ModalStyle';

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
                <p>This is a modal</p>
            </StyledFeedbackModal>
        </>
    );
};

export default FeedbackModal;