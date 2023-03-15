import React, {useState} from 'react';
import { List} from "antd";
import {CheckOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons'
import EditInput from "../EditInput";

interface ITodoItemProps {
    todo: any
}

export default function TodoItem({todo} : ITodoItemProps) {
    const [inputValue, setInputValue] = useState('')
    const [edit, setEdit] = useState<boolean>(false)

    const todoItemChangeHandler = (e: any) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }
    const editTodoClickHandler = () => {
        setEdit(prev => !prev)
    }

    const deleteTodoClickHandler = () => {
        console.log('Delete')
    }

    const currentDate: string = new Date().toLocaleDateString('en-GB')

    // const setTodoClickHandler = () => {
    //     console.log('SET')
    //     // setEdit(false)
    // }

    // const todoItemAction = edit ? <CheckIcon onClick={setTodoClickHandler} /> : <EditIcon onClick={editTodoClickHandler} />

    return (
        <List.Item
            actions={[<EditIcon onClick={editTodoClickHandler} />, <DeleteOutlined onClick={deleteTodoClickHandler} />]}
        >
            <List.Item.Meta
                title={<EditInput
                    value={inputValue}
                    onChange={todoItemChangeHandler}
                    edit={edit}
                    setEdit={setEdit}
                />}
                description={currentDate}
            />
        </List.Item>
    );
};

const EditIcon = ({onClick}: any) => {
    return (
        <EditOutlined className='editIcons' onClick={() => onClick()} />
    )
}

const CheckIcon = ({onClick}: any) => {
    return (
        <CheckOutlined onClick={onClick()} />
    )
}