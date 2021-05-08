import React, { useState } from 'react'
import { List, Card } from 'antd';
import TodoList from '../To do lista/TodoList';
import './Today.css';
import Todo from '../To do lista/Todo';

const data = [
    {
        title: 'Title 1',
        startTime: 11,
        endTime: 12,
        type: 'Geografija'
    },
    {
        title: 'Title 2',
        startTime: 11,
        endTime: 12,
        type: 'Geografija'
    },{
        title: 'Title 3',
        startTime: 11,
        endTime: 12,
        type: 'Geografija'
    },{
        title: 'Title 4',
        startTime: 11,
        endTime: 12,
        type: 'Kosovo'
    },{
        title: 'Title 234',
        startTime: 21,
        endTime: 20,
        type: 'Geografija'
    },
];

function Today(){

    const [todos, setTodos] = useState([{ id: 2971, text: "Your daily task #1" }, { id: 29271, text: "Your daily task #2" }, { id: 29241, text: "Your daily task #3" }]);

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
        <>
        <div className='today-parent'>
            <div className='raspored'>
                <h2>Daily schedule</h2>
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.title}><span>{item.type}</span><span>{`${item.startTime} - ${item.endTime}`}</span></Card>
                    </List.Item>
                )}
            />    
            </div>
            <div className='todo-raspored'>
            <h2>Daily tasks</h2>
             <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
            </div>
        </div>
        </>
    )
}


export default Today
