import React, {ChangeEvent, useState} from 'react';
import {Button, Input, Space} from "antd";
import {addTodo} from "../../redux/slices/todos";
import {useAppDispatch} from "../../hooks";

export default function CreateTodoInput() {
    const [newTodoValue, setNewTodoValue] = useState<string>('')

    const dispatch = useAppDispatch()

    const addTodoHandler = (): void => {
        if (!newTodoValue) return

        dispatch(addTodo(newTodoValue))
        setNewTodoValue('')
    }

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewTodoValue(e.target.value)
    }

    return (
        <Space.Compact style={{width: '100%'}}>
            <Input
                value={newTodoValue}
                placeholder="Add a task"
                onChange={(e) => changeInputHandler(e)}
                onKeyDown={(e) => e.keyCode === 13 && addTodoHandler()}
            />
            <Button type="primary" onClick={() => addTodoHandler()}>Add</Button>
        </Space.Compact>
    );
};
