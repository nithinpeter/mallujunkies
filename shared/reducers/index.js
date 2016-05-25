import { combineReducers } from "redux";
import { default as todos } from "./todo-reducer";
import { default as visibilityFilter } from "./visibility-reducer";
import { default as movies } from "./movies-reducer";
import { default as plans } from "./plans-reducer";

export default combineReducers({todos, visibilityFilter, movies, plans});

