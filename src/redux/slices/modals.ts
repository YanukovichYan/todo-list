import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ICallback} from "../../interfaces";

interface IInitialState {
    isOpen: boolean
    callback: { payload: { id: number; }; type: "todos/deleteTodo"; } | (() => void)
}

const initialState: IInitialState = {
    isOpen: false,
    callback() {
    }
}

const ModalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<ICallback>) => {
            state.isOpen = true
            state.callback = action.payload.callback
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
})

export const {setModal, closeModal} = ModalsSlice.actions

export default ModalsSlice.reducer