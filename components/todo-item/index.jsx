import React from "react";

const TodoItem = ({text, id, status, onTodoClick}) => {
    // con
    let style = status == "done" ? { textDecoration: "line-through" } : { fontWeight: "bold" };
    return <div style={style} key={id} onClick={() => onTodoClick(id)} >{text}</div>
}

export default TodoItem;