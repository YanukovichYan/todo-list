import React from 'react';
import './App.scss';
import {List, Layout} from "antd";
import TodoItem from "./components/TodoItem";
import CreateTodoInput from "./components/CreateTodoInput";

import type {RootState} from './redux/store'
import ConfirmModal from "./components/ConfirmModal";
import {useAppSelector} from "./hooks";

const {Content} = Layout;

const contentStyle: React.CSSProperties = {
    width: '35%',
    margin: '0 auto',
};

const title: string = 'TODO-list'

export default function App() {
    const todos = useAppSelector((state: RootState) => state.todos.list)

    return (
        <Content style={contentStyle}>
            <h2 className={'title'}>{title}</h2>
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
