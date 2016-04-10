export function createTodo(text) {
  return {
    type: 'CREATE_TODO',
    text,
    date: Date.now()
  }
}
export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}
export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}
export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}
export function setFilter(filterType) {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter: filterType
  };
}