import React, { useState, useEffect } from "react";
import firebase from "../../../util/firebase.js";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";
import { useDatabaseContext } from "../../../contexts/DatabaseContext.js";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const taskRef = firebase.database().ref("Task");
    const userID = useDatabaseContext();


    useEffect(() => {
        taskRef
            .get()
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot);
                    const tasks = snapshot.val();
                    const taskList = [];
                    for (let id in tasks) {
                        taskList.push(tasks[id]);
                    }
                    setTodos(taskList);
                    console.log(tasks);
                    console.log(taskList);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


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

        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setTodos(updatedTodos);
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
        </div>
    );
}

export default TodoList;
