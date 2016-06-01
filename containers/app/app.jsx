import React, { Component } from "react";
import Helmet from "react-helmet";
import TodoList from "../todo-list"

export class App extends Component {

    render() {
        
        return <div>
            <Helmet title="Mallujunkies" />
            <div style={style.header}>
                <div style={style.logoContainer}></div>
            </div>
            <div style={style.appContainer}>
                {this.props.children}
            </div>
        </div>
    }
}

const style = {
    header: {
        height: 50,
        boxShadow: '0px 2px 4px 1px #D0D0D0'
    },
    appContainer: {
        minHeight: '100vh',
        maxWidth: 800,
        margin: '0 auto'
    },
    logoContainer: {
        background: 'url("/images/logo-small.png")',
        width: 53,
        height: 53,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
}


