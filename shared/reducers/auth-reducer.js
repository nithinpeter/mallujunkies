import { 
    REQUEST_LOGIN, 
    SUCCESS_LOGIN, 
    FAILURE_LOGIN 
} from "../actions";

const defaultState = {
    isAuthenticated: false,
    user: {},
    error: {}
};

export default function auth(state = defaultState, action) {
  switch(action.type) {
    case 'SUCCESS_LOGIN':
        return Object.assign({}, state, {isAuthenticated: true, user: action.user})
    case 'FAILURE_LOGIN':
        return Object.assign({}, state, {isAuthenticated: false, error: action.error})
    case 'REQUEST_LOGIN':
    default:
        return state;
  }
}