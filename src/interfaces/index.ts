export interface ITodo {
    id: number
    description: string
    date: Date
}

export interface ICallback {
    callback: { payload: { id: number; }; type: "todos/deleteTodo"; }
}