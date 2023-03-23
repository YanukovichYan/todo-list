import React, {ChangeEvent, ForwardedRef} from 'react';
import {Input, InputRef} from "antd";
import './EditInput.scss'

interface IEditInputProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    edit: boolean
    editTodoHandler: () => void
}

export const EditInput = React.forwardRef(({
                                               value,
                                               onChange,
                                               edit,
                                               editTodoHandler
                                           }: IEditInputProps, ref: ForwardedRef<InputRef>) => {
    return (
        <>
            {edit
                ? <div className={'edit-input-wrap'}>
                    <Input
                        value={value}
                        onChange={(e) => onChange(e)}
                        onKeyDown={(e) => e.keyCode === 13 && editTodoHandler()}
                        ref={ref}
                    />
                </div>
                : <span>{value}</span>}
        </>
    );
})


