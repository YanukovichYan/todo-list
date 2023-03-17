import React from 'react';
import './App.scss';
import {List, Layout} from "antd";
import TodoItem from "./components/TodoItem";
import CreateTodoInput from "./components/CreateTodoInput";

import type {RootState} from './redux/store'
import ConfirmModal from "./components/ConfirmModal";
import {useAppDispatch, useAppSelector} from "./hooks";

const {Content} = Layout;

const contentStyle: React.CSSProperties = {
    width: '45%',
    margin: '0 auto',
};

export default function App() {
    const todos = useAppSelector((state: RootState) => state.todos.list)

    const dispatch = useAppDispatch()

    return (
        <Content style={contentStyle}>
            <h2 className={'title'}>To-Do List</h2>
            <CreateTodoInput/>
            <List
                itemLayout="horizontal"
                dataSource={todos}
                renderItem={(todo) => <TodoItem todo={todo}/>}
            />
            <ConfirmModal/>
        </Content>
    );
}
