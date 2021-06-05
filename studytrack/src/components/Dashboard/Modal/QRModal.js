import React, { useState } from 'react';
import { StyledQRModal } from '../../Landing/ModalStyle';
import { QrcodeOutlined } from "@ant-design/icons";
import { Spin } from 'antd';


const QRModal = ({ todo }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [isGenerating, setIsGenerating] = useState(true);
    const path = `Users/${todo.userid}/Task/${todo.id}`;

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
            <QrcodeOutlined onClick={showModal} />
            <StyledQRModal
                title=" "
                centered
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={'55vw'}
                footer={null}
            >
                <img src="/images/ST_Logo.png" alt="logo"></img>
                <h2>Your QR code:</h2>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${path}`} onLoad={() => setIsGenerating(false)} />

                {isGenerating && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Spin />
                        <h4 style={{ marginTop: '10px' }}>Generating QR Code</h4>
                    </div>
                )}
            </StyledQRModal>
        </>
    );
};

export default QRModal;