import React from 'react';
import {Input} from "antd";
import {CheckOutlined} from "@ant-design/icons";
import './EditInput.scss'

interface IInputProps {
    value: string
    onChange: (e: any) => void
    edit: boolean
    setEdit: (val: boolean) => void
}

export default function EditInput({value, onChange, edit, setEdit}: IInputProps) {
    const setTodoClickHandler = () => {
        setEdit(false)
    }

    const onKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            console.log('Enter')
            setEdit(false)
        }
    }

    return (
        <>
            {edit
                ? <div className={'edit-input-wrap'}>
                    <Input
                        value={value}
                        onChange={(e) => onChange(e)}
                        onKeyPress={(e) => onKeyPress(e)}
                    />
                    <CheckOutlined className={'check-icon'} onClick={() => setTodoClickHandler()}/>
                </div>
                : <span>{value}</span>}
        </>
    );
};


