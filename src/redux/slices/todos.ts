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
        addTodo: (state, action: PayloadAction<string>) => {
            const createTodoId: number = state.list.length + 1

            const newTodo: ITodo = {
                id: createTodoId,
                description: action.payload,
                date: new Date()
            }

            state.list = [newTodo, ...state.list]
        },
        editTodo: (state, action: PayloadAction<{ id: number; description: string }>) => {
            state.list = state.list.map((todo: ITodo) =>
                todo.id === action.payload.id ? {
                    id: todo.id,
                    description: action.payload.description,
                    date: new Date()
                } : todo
            )
        },
        deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
            state.list = state.list.filter((todo: ITodo) => todo.id !== action.payload.id)
        }
    },
})

export const {addTodo, editTodo, deleteTodo} = todosSlice.actions

export default todosSlice.reducer