import React, { useState } from 'react'
import firebase from "../../../util/firebase.js"
import Todo from './Todo';
import TodoForm from './TodoForm'
import './TodoList.css'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const taskRef = firebase.database().ref("Task")

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

    console.log(todo)

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        const task = {
            id:todo.id,
            description:todo.text,
            complete: false,
        };
        console.log(task);
        //firebase write
        taskRef.push(task);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    return (
        <div className='todolist'>
            <h2>Add a task</h2>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
