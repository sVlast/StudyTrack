import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        title: "",
        description: "",
        type: "",
        complete: false,
        startTime: "",
        endTime: "",
        userid: "",
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            //
            id: null,
            title: "",
            description: "",
            type: "",
            complete: false,
            startTime: "",
            endTime: "",
            userid: "",
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.complete ? "todo-row complete" : "todo-row"}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.title}
            </div>
            <div className="icons">
                <CloseOutlined
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <EditOutlined
                    onClick={() => setEdit({ id: todo.id, value: todo.title })}
                    className="edit-icon"
                />
            </div>
        </div>
    ));
}

export default Todo;
