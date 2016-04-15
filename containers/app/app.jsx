import React, { Component } from "react";
import Helmet from "react-helmet";
import TodoList from "../todo-list"

export class App extends Component {

    render() {
        
        return <div>
            <Helmet title="Mallujunkies - Malayalam Movie Reviews" />
            {this.props.children}
        </div>
    }
}



