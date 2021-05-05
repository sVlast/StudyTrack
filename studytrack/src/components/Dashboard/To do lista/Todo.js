import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <CloseOutlined  onClick={() => removeTodo(todo.id)} className='delete-icon' />
                <EditOutlined onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
            </div>
        </div >
    ))
}

export default Todo
