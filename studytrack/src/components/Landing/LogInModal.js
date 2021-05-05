import React, { useState } from 'react';
import { Button } from 'antd';
import HorizontalLoginForm from './AntForm';
import { StyledLogModal } from './ModalStyle';

const LogInModal = (props) => {
    //const [visible, setVisible] = useState(false);

    function handleSwap() {
        props.changeVisibility(false);
        props.changeOther(true);
    }


    return (
        <>
            <Button type="primary" onClick={() => props.changeVisibility(true)}>
                Log in
      </Button>
            <StyledLogModal
                title=" "
                centered
                visible={props.isvisible}
                //onOk={() => props.changeVisibility(false)}
                onCancel={() => props.changeVisibility(false)}
                width={1000}
                footer={[
                    <p>Don't have an account?</p>,
                    <Button type="normal" onClick={()=>{handleSwap()}}>Register</Button>
                ]}
            >
                <img src="/images/ST_Logo.png" alt="logo"></img>
                <p>Welcome to StudyTrack</p>
                <p>Log in</p>
                <HorizontalLoginForm className='modal-login-form'/>
                <a href="#" className="forgot-pass" >Forgot password?</a>
            </StyledLogModal>
        </>
    );
};

export default LogInModal;