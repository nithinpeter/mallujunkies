import { combineReducers } from "redux";
import { default as todos } from "./todo-reducer";
import { default as visibilityFilter } from "./visibility-reducer";

export default combineReducers({todos, visibilityFilter});