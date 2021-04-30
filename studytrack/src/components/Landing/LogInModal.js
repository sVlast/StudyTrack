import React, { useState } from 'react';
import { Button } from 'antd';
import HorizontalLoginForm from './AntForm';
import { StyledLogModal } from './ModalStyle';

const LogInModal = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Log in
      </Button>
            <StyledLogModal
                title=" "
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
                footer={[
                    <p>Don't have an account?</p>,
                    <Button type="normal">Register</Button>
                ]}
            >
                <img src="/images/ST_Logo.png" alt="logo"></img>
                <p>Welcome to StudyTrack</p>
                <p>Log in</p>
                <HorizontalLoginForm className='modal-login-form'/>
                <a href="#" className="forgot-pass">Forgot password?</a>
            </StyledLogModal>
        </>
    );
};

export default LogInModal;