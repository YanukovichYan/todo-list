import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IInitialState {
    isOpen: boolean
    action: any
}

const initialState: IInitialState = {
    isOpen: false,
    action() {}
}

const ModalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<IInitialState>) => {
            state.isOpen = true
            state.action = action.payload.action
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
})

export const {setModal, closeModal} = ModalsSlice.actions

export default ModalsSlice.reducer