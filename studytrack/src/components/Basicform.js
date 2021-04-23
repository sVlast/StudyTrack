import firebase from '../util/firebase.js';
import React, { useState } from "react";

export default function Basicform() {
    const [title, setTitle] = useState('');
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }
    const createTodo = () => {
        const todoRef = firebase.database().ref("Todo")
        console.log(todoRef);
        const todo = {
            title,
            complete: false,
        };

        todoRef.push(todo);

    }
    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title} />
            <button onClick={createTodo}>insert into database</button>
        </div>
    );
}

