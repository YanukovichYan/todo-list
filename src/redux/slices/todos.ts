import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ITodo} from "../../interfaces";

interface IInitialState {
    list: ITodo[]
}

const initialState: IInitialState = {
    list: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.list.unshift(action.payload)
        },
        editTodo: (state, action: PayloadAction<ITodo>) => {
            state.list = state.list.map((todo: ITodo) =>
                todo.id === action.payload.id ? action.payload : todo)
        },
        deleteTodo: (state, action: PayloadAction<ITodo>) => {
            state.list = state.list.filter((todo: ITodo) => todo.id !== action.payload.id)
        }
    },
})

export const {addTodo, editTodo, deleteTodo} = todosSlice.actions

export default todosSlice.reducer