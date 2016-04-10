import React, { Component } from "react";
import TodoList from "../todo-list"

export class App extends Component {

    render() {
        console.dir(this);
        return <div>
            {this.props.children}
        </div>
    }
}



