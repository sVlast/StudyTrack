import React, { useState, useEffect } from "react";
import firebase from "../../../util/firebase.js";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";
import { useDatabaseContext } from "../../../contexts/DatabaseContext.js";
import FeedbackModal from "../Modal/FeedbackModal";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const userID = useDatabaseContext();
    const taskRef = firebase.database().ref("Users/" + userID + "/Task");

    console.log("TodoList.js - UserID:", userID);

    useEffect(() => {
        taskRef.on("value", (snapshot) => {
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

    if (userID == "empty") return "Error!";

    const addTodo = (todo) => {
        if (!todo.title || /^\s*$/.test(todo.title)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);

        //firebase write
        taskRef.push(todo);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.title || /^\s*$/.test(newValue.title)) {
            return;
        }

        //console.log("id:", todoId, "val:", newValue);

        taskRef.child(todoId).update(newValue);

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
                if (!todo.complete) {
                    setShowFeedbackModal(true);
                }
            }
            return todo;
        });
        //setTodos(updatedTodos);
    };

    return (
        <div className="todolist">
            <h2>Add a task</h2>
            <TodoForm onSubmit={addTodo} />
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
    );
}

export default TodoList;
