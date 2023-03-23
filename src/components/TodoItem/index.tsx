import React, {ChangeEvent, ReactElement, useEffect, useRef, useState} from 'react';
import {List} from "antd";
import {CheckOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {EditInput} from "../EditInput";
import {deleteTodo, editTodo} from "../../redux/slices/todos";
import {ITodo} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {setModal} from "../../redux/slices/modals";
import './TodoItem.scss'

export default function TodoItem({todo}: { todo: ITodo }) {
    const [inputValue, setInputValue] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setInputValue(todo.description)
    }, [todo])

    const todoInputEditHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }

    const editIconClick = (): void => setEdit(true)

    const deleteTodoClickHandler = (): void => {
        dispatch(setModal({callback: deleteTodo({id: todo.id})}))
    }

    const dateWithFormat: string = todo.date.toLocaleString('en-GB')

    const editTodoHandler = (): void => {
        dispatch(editTodo({id: todo.id, description: inputValue}))
        setEdit(false)
    }

    const todoItemAction: ReactElement = edit ?
        <CheckOutlined className={`${edit && 'active'}`} onClick={editTodoHandler}/> :
        <EditOutlined onClick={editIconClick}/>

    const inputRef = useRef<any>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [edit])

    return (
        <List.Item
            actions={[todoItemAction, <DeleteOutlined onClick={deleteTodoClickHandler}/>]}
        >
            <List.Item.Meta
                title={<EditInput
                    value={inputValue}
                    onChange={todoInputEditHandler}
                    edit={edit}
                    editTodoHandler={editTodoHandler}
                    ref={inputRef}
                />}
                description={!edit && dateWithFormat}
            />
        </List.Item>
    );
};
