import React, {useEffect, useState} from 'react';
import {List} from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import EditInput from "../EditInput";
import {deleteTodo} from "../../redux/slices/todos";
import {ITodo} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {setModal} from "../../redux/slices/modals";

interface ITodoItemProps {
    todo: ITodo
}

export default function TodoItem({todo}: ITodoItemProps) {
    const [inputValue, setInputValue] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setInputValue(todo.description)
    }, [todo])

    const todoItemChangeHandler = (e: any) => {
        setInputValue(e.target.value)
    }

    const editTodoClickHandler = () => {
        setEdit(prev => !prev)
    }

    const deleteTodoClickHandler = () => {
        dispatch(setModal({isOpen: true, action: deleteTodo(todo)}))
    }

    const dateWithFormat: string = todo.date.toLocaleString('en-GB')

    return (
        <List.Item
            actions={[<EditIcon onClick={editTodoClickHandler}/>, <DeleteOutlined onClick={deleteTodoClickHandler}/>]}
        >
            <List.Item.Meta
                title={<EditInput
                    value={!edit ? todo.description : inputValue}
                    onChange={todoItemChangeHandler}
                    edit={edit}
                    setEdit={setEdit}
                    todo={todo}
                />}
                description={dateWithFormat}
            />
        </List.Item>
    );
};

const EditIcon = ({onClick}: any) => {
    return (
        <EditOutlined className='editIcons' onClick={() => onClick()}/>
    )
}