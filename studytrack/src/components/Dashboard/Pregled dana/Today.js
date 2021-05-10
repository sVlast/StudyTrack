import React, { useState, useEffect } from "react";
import firebase from "../../../util/firebase.js";
import { List, Card } from "antd";
import "./Today.css";
import Todo from "../To do lista/Todo";

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

const taskRef = firebase.database().ref("Task");

function Today() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // taskRef
        //     .get()
        //     .then((snapshot) => {
        //         if (snapshot.exists()) {
        //             console.log(snapshot);
        //             const tasks = snapshot.val();
        //             const taskList = [];
        //             for (let id in tasks) {
        //                 taskList.push({ id, ...tasks[id] });
        //             }
        //             setTodos(taskList);
        //             console.log(tasks);
        //             console.log(taskList);
        //         } else {
        //             console.log("No data available");
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        taskRef.on("value", (snapshot) => {
            const tasks = snapshot.val();
            const taskList = [];
            for (let id in tasks) {
                taskList.push({ id, ...tasks[id] });
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
                </div>
            </div>
        </>
    );
}

export default Today;
