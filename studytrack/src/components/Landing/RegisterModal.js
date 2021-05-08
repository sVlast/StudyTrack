import React, { useState } from 'react';
import { Button } from 'antd';
import { StyledRegModal } from './ModalStyle';
import RegistrationForm from './AntRegForm';

const RegisterModal = (props) => {
    //const [visible, setVisible] = useState(false);

    function handleSwap() {
        props.changeVisibility(false);
        props.changeOther(true);
    }

    return (
        <>
            <Button type="disabled" onClick={() => props.changeVisibility(true)}>
                Register
      </Button>
            <StyledRegModal
                title=" "
                centered
                className="regmodal"
                visible={props.isvisible}
                //onOk={() => props.changeVisibility(true)}
                onCancel={() => props.changeVisibility(false)}
                width={1000}
                footer={[
                    <p>Already have an account? Login <a className="registerlink" href="#" onClick={() => { handleSwap() }}>here</a></p>,

                ]}
            >
                <img src="/images/ST_Logo_white.png" alt="logo"></img>
                <p>Register to StudyTrack</p>
                <div className="regalign">
                    <RegistrationForm />
                </div>
            </StyledRegModal>
        </>
    );
};

export default RegisterModal;