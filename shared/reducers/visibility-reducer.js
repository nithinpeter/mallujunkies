const defaultState = "ALL";

export default function visibilityFilter(state = defaultState, action) {
    switch(action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
}