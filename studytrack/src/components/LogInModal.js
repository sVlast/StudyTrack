import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import HorizontalLoginForm from './AntForm';

const LogInModal = () => {
    const [visible, setVisible] = useState(false);
    const StyledModal = styled(Modal)`
        .ant-modal{
        text-decoration: none;
        width: 100%;
        }
        .ant-modal-content{
            min-width: 580px ;
            background-color: #1890FF !important;
            height: 780px;
            border-radius: 20px !important;

        }

        .ant-modal-header{
            text-align: center;
            border-radius: 20px 20px 0 0 !important;
            border: none !important;
        }

        .ant-modal-body{
            background-color: #fff;
            text-align: center;


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
            margin-top: 30px;
            font-size: 22px;
        }

        .ant-modal-body p:last-of-type{
            margin: 80px 0 30px;
            padding: 0;
        }

        a.forgot-pass{
            color: #BFBFBF;
            margin: 40px 0 40px;
            display: inline-block;
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
        .ant-modal-footer p{
            margin-top: 60px;
        }
        .ant-modal-footer button{
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }


    `;
    return (
        <>
            <Button type="primary" onClick={() => setVisible(true)}>
                Log in
      </Button>
            <StyledModal
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
            </StyledModal>
        </>
    );
};

export default LogInModal;