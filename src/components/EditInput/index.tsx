import React, {ChangeEvent} from 'react';
import {Input} from "antd";
import './EditInput.scss'

interface IEditInputProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    edit: boolean
    editTodoHandler: () => void
}

export default function EditInput({value, onChange, edit, editTodoHandler}: IEditInputProps) {
    return (
        <>
            {edit
                ? <div className={'edit-input-wrap'}>
                    <Input
                        value={value}
                        onChange={(e) => onChange(e)}
                        onKeyDown={(e) => e.keyCode === 13 && editTodoHandler()}
                        autoFocus
                    />
                </div>
                : <span>{value}</span>}
        </>
    );
};


