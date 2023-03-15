import React from 'react';
import './App.scss';
import {List, Spin} from "antd";
import TodoItem from "./components/TodoItem";
import CreateTodoInput from "./components/CreateTodoInput";

export default function App() {
    const data: any = [{title: 'asdas'}];

    return (
        <div className={'app-wrapper'}>
            <h2 className={'title'}>ToDo List</h2>
            <CreateTodoInput/>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => <TodoItem todo={item}/>}
            />
            {/*<Spin/>*/}
        </div>
    );
}
