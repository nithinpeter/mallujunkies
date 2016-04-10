import React, { Component } from "react";
import { createTodo as addTodoAction } from "../../shared/actions"
import { connect } from "react-redux";

let AddTodo = ({dispatch}) => {
    let input;
    return <div>
            <input type="text" ref={ (node) => input = node}/>
            <button onClick={ () => { dispatch(addTodoAction(input.value)); input.value = "";}}>
                Add
            </button>
        </div>    
    
}

AddTodo = connect()(AddTodo);

export { AddTodo }