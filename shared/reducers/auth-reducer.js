import { 
    REQUEST_LOGIN, 
    SUCCESS_LOGIN, 
    FAILURE_LOGIN 
} from "../actions";

const defaultState = {
    isAuthenticated: false,
    user: {},
    error: {},
    isLoading: false
};

export default function auth(state = defaultState, action) {
  switch(action.type) {
    case 'SUCCESS_LOGIN':
        return Object.assign({}, state, {isAuthenticated: true, user: action.user})
    case 'FAILURE_LOGIN':
        return Object.assign({}, state, {isAuthenticated: false, error: action.error, isLoading: false})
    case 'REQUEST_LOGIN':
        return Object.assign({}, state, {isAuthenticated: false, isLoading: true})
    default:
        return state;
  }
}