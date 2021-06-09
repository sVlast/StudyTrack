import React, { useState, useEffect } from "react";
import firebase from "../../../util/firebase.js";
import { List, Card } from "antd";
import "./TodayProfesor.css";
import Todo from "../To do lista/Todo";
import FeedbackModal from "../Modal/FeedbackModal.js";
import { useDatabaseContext } from "../../../contexts/DatabaseContext.js";
import moment from "moment";
import CommentModal from "../Modal/CommentModal.js";
import { CommentOutlined } from "@ant-design/icons";

function TodayProfesor() {
    const [todos, setTodos] = useState([]);
    const [time, setTime] = useState(moment().format("DD/MM/YYYY"));
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [task, setTask] = useState({});
    const userID = useDatabaseContext();

    //const usersRef = firebase.database().ref("Users");
    const taskRef = firebase.database().ref("Users/" + userID + "/Task");
    const taskRefToday = firebase
        .database()
        .ref("Users/" + userID + "/Task")
        .orderByChild("dtstart")
        .equalTo(time);

    useEffect(() => {
        taskRefToday.on("value", (snapshot) => {
            const tasks = snapshot.val();
            const taskList = [];
            for (let id in tasks) {
                taskList.unshift({ id, ...tasks[id] });
                //setTask(tasks[id]);
            }
            setTodos(taskList);
            //console.log(tasks);
            //console.log(taskList);
        });

        return () => taskRef.off();
    }, []);

    const renderByID = (item) => {
        setTask(item);
        setShowCommentModal(true);
        //console.log("todayprofesor ITEM", item);
        //console.log("todayprofesor task", task);
    };

    return (
        <>
            <div className="today-parent">
                <div className="raspored">
                    <h2>Daily schedule</h2>
                    <List
                        grid={{ gutter: 16, column: 1 }}
                        dataSource={todos}
                        renderItem={(item) => (
                            <List.Item>
                                <Card
                                    title={item.title}
                                    extra={
                                        <CommentOutlined
                                            onClick={() => renderByID(item)}
                                        />
                                    }
                                >
                                    <span>{item.type}</span>
                                    <span>{`${item.htstart.slice(0,-3)} - ${item.htend.slice(0,-3)}`}</span>
                                </Card>
                                <CommentModal
                                    isVisible={showCommentModal}
                                    onClose={() => setShowCommentModal(false)}
                                    task={task}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </>
    );
}

export default TodayProfesor;
