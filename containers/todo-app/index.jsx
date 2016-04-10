import React, { Component } from "react";
import TodoList from "../todo-list";
import { AddTodo } from "../../components/add-todo";
import Filter from "../filter";

export class TodoApp extends Component {

    render() {
        console.dir(this);
        return <div>
            <h1>Todo App</h1>
            <hr/>
            <AddTodo />
            <TodoList />
            <Filter />
        </div>
    }
}