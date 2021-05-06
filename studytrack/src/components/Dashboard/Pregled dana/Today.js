import React from 'react'
import { List, Card } from 'antd';
import TodoList from '../To do lista/TodoList';
import './Today.css';

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];

function Today(){
    return (
        <>
        <div className='today-parent'>
            <div className='raspored'>
                <h2>Dnevni raspored</h2>
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.title}><span>Flag</span><span>Time</span></Card>
                    </List.Item>
                )}
            />    
            </div>
            <div className='todo-raspored'>
                <TodoList/>
            </div>
        </div>
        </>
    )
}


export default Today
