import React from "react";
import TodoItem from "../../components/todo-item";
import { connect } from "react-redux";
import { toggleTodo } from "../../shared/actions";


const TodoList = ({todos, onTodoClick}) => {
    return <div>
        <h3>Todo list</h3>
        {
            todos.map((item) => {
                console.log("todo item component:::", TodoItem);
                return <TodoItem {...item} onTodoClick={onTodoClick}/>
            }) 
        }
        <TodoItem />
    </div>

}



const mapStateToProps = (state) => {
    console.log("state::", state);
  return {
    todos: getVisibleTodos(state)
  }
}

const getVisibleTodos = (state) => {
    if(state.visibilityFilter == "ACTIVE")
        return state.todos.map( (todo) => {
            if(todo.status == "") return todo;
        });
    else 
        return state.todos;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList