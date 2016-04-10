const defaultState = [];
let nextId = 0;

export default function todos(state = defaultState, action) {
  switch(action.type) {
    case 'CREATE_TODO':
        nextId++;
        console.log("create todo::", action, nextId);
        return state.concat({ text: action.text, id: nextId, status: "" });
    // case 'EDIT_TODO':
    //   return state.set(action.id, action.text);
    // case 'DELETE_TODO':
    //   return state.delete(action.id);
    case 'TOGGLE_TODO':
        let modifiedTodos =  state.map((todo) => {
           if(todo.id == action.id) {
               if(todo.status == "") todo.status = "done";
               else todo.status = "";
           } 
           return todo;
        });
        console.log("modifiedTodos", modifiedTodos);
        return modifiedTodos;
    default:
        return state;
  }
}