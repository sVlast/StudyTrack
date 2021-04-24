import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import RegistrationForm from './AntRegForm';
import './RegisterModal.css';

const RegisterModal = () => {
    const [visible, setVisible] = useState(false);
    const StyledModal = styled(Modal)`
     .ant-modal{
    text-decoration: none;
    width: 100%;
    }
    .ant-modal-content{
        border-radius: 20px;
        background-color: #1890FF;
        height: 700px;
        
    }
.ant-modal-body{
    min-width: 580px ;
    background-color: #1890FF !important;
    padding-bottom: 0;
}

.ant-modal-header{
    text-align: center;
    border-radius: 20px 20px 0 0;
    border: none;
    background-color: #1890FF;
}

.ant-modal-body img{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}
.ant-modal-body p{
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-align: center;
    font-size: 22px;
    color: #fff;
    margin-top: 20px;
}


a.registerlink{
    color: #fff;
}

.ant-modal form{
    margin:0 auto;
}
.ant-modal-footer{
    width: max-content;
    margin: 0 auto;
    border: none !important;
    color: #fff;
}

.ant-modal-footer button{
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.ant-modal-close-x{
    color:#fff;
}
.ant-form-item-label > label{
    color: #fff;
}
#text{
    color: #fff;
}
.ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
    color:#fff;
}
    `;
    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Register
      </Button>
            <StyledModal
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
            </StyledModal>
        </>
    );
};

export default RegisterModal;