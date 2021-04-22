import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import HorizontalLoginForm from './AntForm';
import './LogInModal.css';

const LogInModal = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Log in
      </Button>
            <Modal
                title=" "
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <img src="/images/ST_Logo.png" alt="logo"></img>
                <p>Welcome to StudyTrack</p>
                <p>Log in</p>
                <HorizontalLoginForm className='modal-login-form'/>
                <a href="#" className="forgot-pass">Forgot password?</a>
            </Modal>
        </>
    );
};

export default LogInModal;