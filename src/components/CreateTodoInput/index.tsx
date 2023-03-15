import React, {useEffect, useState} from 'react';
import {Button, Input, Space} from "antd";

export default function CreateTodoInput() {
    const [newTodoValue, setNewTodoValue] = useState<string>('')

    const addTodoHandler = () => {
        console.log('Add todo')
    }

    const changeInputHandler = (e: any) => {
        setNewTodoValue(e.target.value)
    }

    useEffect(() => {
        // console.log('newTodoValue', newTodoValue)
    }, [newTodoValue])

    const onKeyPress = (e: any) => {
        console.log('Here')
        e.key === 'Enter' && addTodoHandler()
    }

    return (
        <Space.Compact style={{width: '100%'}}>
            <Input
                value={newTodoValue}
                placeholder="Add a task"
                onChange={(e) => changeInputHandler(e)}
                onKeyPress={(e) => onKeyPress(e)}
            />
            <Button type="primary" onClick={() => addTodoHandler()}>Add</Button>
        </Space.Compact>
    );
};
