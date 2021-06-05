import React, { useState, useEffect } from "react";
import firebase from "../../../util/firebase.js";
import { List, Card } from "antd";
import "./Today.css";
import Todo from "../To do lista/Todo";
import FeedbackModal from "../Modal/FeedbackModal.js";
import { useDatabaseContext } from "../../../contexts/DatabaseContext.js";
import moment from "moment";

const data = [
    {
        title: "Dizajn digitalnih proizvoda",
        startTime: 9,
        endTime: 10,
        type: "Predavanje",
    },
    {
        title: "Digitalna fotografija",
        startTime: 14,
        endTime: 15,
        type: "Laboratorijske vježbe",
    },
    {
        title: "Digitalna slika",
        startTime: 16,
        endTime: 17,
        type: "Laboratorijske vježbe",
    },
    {
        title: "XML programiranje",
        startTime: 18,
        endTime: 19,
        type: "Predavanje",
    },
];

function Today() {
    const [todos, setTodos] = useState([]);
    const [time, setTime] = useState(
        moment().add(2, "days").format("DD/MM/YYYY")
    );
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const userID = useDatabaseContext();

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
            }
            setTodos(taskList);
            //console.log(tasks);
            //console.log(taskList);
        });

        return () => taskRef.off();
    }, []);

    const updateTodo = (todoId, newValue) => {
        if (!newValue.title || /^\s*$/.test(newValue.title)) {
            return;
        }

        taskRef.child(todoId).update(newValue);
        //console.log("id:", todoId, "val:", newValue);

        // setTodos((prev) =>
        //     prev.map((item) => (item.id === todoId ? newValue : item))
        // );
    };

    const removeTodo = (id) => {
        //const removeArr = [...todos].filter((todo) => todo.id !== id);
        //setTodos(removeArr);
        taskRef.child(id).remove();
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {

                //todo.complete = !todo.complete;
                taskRef.child(id).update({ complete: !todo.complete });
                const task = taskRef.child(id).get().then((snapshot) => {
                    if (snapshot.exists()) {
                        const val = snapshot.val();
                        return val;
                    } else {
                        console.log("No data available");
                    }
                }).catch((error) => {
                    console.error(error);
                });
                if (!todo.complete && task.wasPresent) {
                    setShowFeedbackModal(true);
                }
            }
            return todo;
        });
        //setTodos(updatedTodos);
    };

    return (
        <>
            <div className="today-parent">
                <div className="raspored">
                    <h2>Daily schedule</h2>
                    <List
                        grid={{ gutter: 16, column: 1 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Card title={item.title}>
                                    <span>{item.type}</span>
                                    <span>{`${item.startTime} - ${item.endTime}`}</span>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
                <div className="todo-raspored">
                    <h2>Daily tasks</h2>
                    <Todo
                        todos={todos}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                    <FeedbackModal
                        isVisible={showFeedbackModal}
                        onClose={() => setShowFeedbackModal(false)}
                    />
                </div>
            </div>
        </>
    );
}

export default Today;
