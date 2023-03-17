import React, {useState} from 'react';
import {Button, Input, Space} from "antd";
import {useSelector} from "react-redux";
import {addTodo} from "../../redux/slices/todos";
import {RootState} from "../../redux/store";
import {ITodo} from "../../interfaces";
import {useAppDispatch} from "../../hooks";

export default function CreateTodoInput() {
    const [newTodoValue, setNewTodoValue] = useState<string>('')

    const todos = useSelector((state: RootState) => state.todos.list)
    const dispatch = useAppDispatch()

    const addTodoHandler = () => {
        if (!newTodoValue) return

        const currentDate: Date = new Date()
        const createTodoId: number = todos.length + 1

        const newTodo: ITodo = {
            id: createTodoId,
            description: newTodoValue,
            date: currentDate
        }
        dispatch(addTodo(newTodo))
        setNewTodoValue('')
    }

    const changeInputHandler = (e: any) => {
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
