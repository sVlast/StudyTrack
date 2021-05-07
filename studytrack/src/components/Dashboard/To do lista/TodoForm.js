import React, { useState, useEffect, useRef } from 'react';
import { Button, DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <Space className='date-space' direction="vertical" size={12}>
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="MM-DD HH:mm"
                            onChange={onChange}
                            onOk={onOk}
                        />
                    </Space>
                    <input
                        type="text"
                        placeholder="Edit the task"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                        autoComplete='off'
                    />
                    <Button type="secondary" htmlType="submit">Update</Button>
                </>
            ) : (
                <>
                        <Space className='date-space' direction="vertical" size={12}>
                            <RangePicker
                                showTime={{ format: 'HH:mm' }}
                                format="MM-DD HH:mm"
                                onChange={onChange}
                                onOk={onOk}
                            />
                        </Space>
                    <input
                        type="text"
                        placeholder="Add a task"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                        autoComplete='off'
                    />
                    <Button type="primary" htmlType="submit">Add todo</Button>
                </>
            )

            }

        </form>
    )
}

export default TodoForm
