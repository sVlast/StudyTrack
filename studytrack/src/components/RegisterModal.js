import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import RegistrationForm from './AntRegForm';
import './RegisterModal.css';

const RegisterModal = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Register
      </Button>
            <Modal
                title=" "
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
                footer={[
                    <p>Already have an account? Login <a className="registerlink" href="#">here</a></p>,
                    
                ]}
            >
                <img src="/images/ST_Logo_white.png" alt="logo"></img>
                <p>Register to StudyTrack</p>
                <RegistrationForm/>
            </Modal>
        </>
    );
};

export default RegisterModal;