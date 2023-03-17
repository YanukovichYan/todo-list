import React from 'react';
import {Input} from "antd";
import {CheckOutlined} from "@ant-design/icons";
import './EditInput.scss'
import {editTodo} from "../../redux/slices/todos";
import {ITodo} from "../../interfaces";
import {useAppDispatch} from "../../hooks";

interface IInputProps {
    value: string
    onChange: (e: any) => void
    edit: boolean
    setEdit: (val: boolean) => void
    todo: ITodo
}

export default function EditInput({value, onChange, edit, setEdit, todo}: IInputProps) {
    const dispatch = useAppDispatch()

    const editTodoHandler = () => {
        const currentDate: Date = new Date()
        const editedTodo = {...todo}

        editedTodo.description = value
        editedTodo.date = currentDate

        dispatch(editTodo(editedTodo))
        setEdit(false)
    }

    return (
        <>
            {edit
                ? <div className={'edit-input-wrap'}>
                    <Input
                        value={value}
                        onChange={(e) => onChange(e)}
                        onKeyDown={(e) => e.keyCode === 13 && editTodoHandler()}
                    />
                    <CheckOutlined className={'check-icon'} onClick={() => editTodoHandler()}/>
                </div>
                : <span>{value}</span>}
        </>
    );
};


