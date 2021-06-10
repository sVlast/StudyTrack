import React, { useState, useEffect } from "react";
import firebase from "../../../util/firebase.js";
import { Button, List, Card, Rate } from "antd";
import { StyledCommentModal } from "../../Landing/ModalStyle";
import {
    FrownOutlined,
    MehOutlined,
    SmileOutlined,
    CommentOutlined,
} from "@ant-design/icons";

const CommentModal = ({ isVisible, onClose, task }) => {
    const [tasks, setTasks] = useState([]);

    const usersRef = firebase.database().ref("Users");

    useEffect(() => {
        //console.log("commentModal:TASK", task);
        usersRef.get().then((snapshot) => {
            if (snapshot.exists()) {
                //console.log("commentModal:", snapshot.val());
                const tasks = snapshot.val();
                const taskList = [];
                for (let id in tasks) {
                    //console.log("comMod:task: ", tasks[id]);
                    if (tasks[id].hasOwnProperty("Task")) {
                        //console.log(tasks[id].Task);
                        for (let t in tasks[id].Task) {
                            if (
                                tasks[id].Task[t].dtstart == task.dtstart &&
                                tasks[id].Task[t].htstart == task.htstart &&
                                tasks[id].Task[t].title == task.title &&
                                tasks[id].Task[t].comment != ""
                            ) {
                                taskList.push(tasks[id].Task[t]);
                                //console.log("OVO RADI!!!");
                            }
                        }
                    } else {
                        //console.log("task ne postoji!");
                    }
                }
                setTasks(taskList);
            } else {
                console.log("No data available");
            }
        });
    }, [task]);

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
            width={"55vw"}
            footer={null}
        >
            <img src="/images/ST_Logo.png" alt="logo"></img>
            <h2>Comments and feedback from the lecture</h2>
            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={tasks}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            title={
                                <Rate
                                    disabled
                                    defaultValue={item.grade}
                                    character={({ index }) =>
                                        customIcons[index + 1]
                                    }
                                />
                            }
                        >
                            {item.comment}
                        </Card>
                    </List.Item>
                )}
            />
        </StyledCommentModal>
    );
};

export default CommentModal;
