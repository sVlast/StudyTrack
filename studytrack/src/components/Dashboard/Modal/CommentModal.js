import React, { useState } from 'react';
import { Button, List, Card, Rate } from 'antd';
import { StyledCommentModal } from '../../Landing/ModalStyle';
import { FrownOutlined, MehOutlined, SmileOutlined, CommentOutlined } from '@ant-design/icons';

const CommentModal = ({ isVisible, onClose }) => {

    const data = [
        {
            grade: 2,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat neque vel lacus laoreet posuere. In velit felis, dignissim quis erat at, tempus mollis est. Nam tristique vel sapien vel vestibulum."
        },
        {
            grade: 5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat neque vel lacus laoreet posuere."
        },
        {
            grade: 4,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat neque vel lacus laoreet posuere."
        },
        {
            grade: 3,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat neque vel lacus laoreet posuere."
        },
        {
            grade: 4,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat neque vel lacus laoreet posuere."
        }
    ];
    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };

    return (


        <StyledCommentModal
            title=" "
            centered
            visible={isVisible}
            onCancel={onClose}
            width={'55vw'}
            footer={null}

        >
            <img src="/images/ST_Logo.png" alt="logo"></img>
            <h2>Comments and feedback from the lecture</h2>
            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={<Rate disabled defaultValue={item.grade} character={({ index }) => customIcons[index + 1]} />}>
                            {item.comment}
                        </Card>
                    </List.Item>
                )}
            />
        </StyledCommentModal>
    );
};

export default CommentModal;