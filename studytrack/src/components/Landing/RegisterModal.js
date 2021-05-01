import React, { useState } from 'react';
import { Button } from 'antd';
import { StyledRegModal } from './ModalStyle';
import RegistrationForm from './AntRegForm';

const RegisterModal = () => {
    const [visible, setVisible] = useState(false);
    
    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Register
      </Button>
            <StyledRegModal
                title=" "
                centered
                className="regmodal"
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
                <div className="regalign">
                <RegistrationForm/>
                </div>  
            </StyledRegModal>
        </>
    );
};

export default RegisterModal;