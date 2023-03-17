import {configureStore} from '@reduxjs/toolkit'

import TodosReducer from './slices/todos'
import ModalsReducer from './slices/modals'

export const store = configureStore({
    reducer: {
        todos: TodosReducer,
        modals: ModalsReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch