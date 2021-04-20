import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import HorizontalLoginForm from './AntForm';
import './LogInModal.css';

const LogInModal = () => {
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
                Log In
      </Button>
            <Modal title=" " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <img src="/images/ST_Logo.png"></img>
                <p>Welcome to StudyTrack</p>
                <p>Log in</p>
                <HorizontalLoginForm/>
                <a href="#" className="forgot-pass">Forgot password?</a>
            </Modal>
        </>
    );
};

export default LogInModal;