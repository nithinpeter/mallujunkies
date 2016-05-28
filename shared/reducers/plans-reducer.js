import { 
    REQUEST_PLAN_DETAILS, 
    SUCCESS_PLAN_DETAILS, 
    FAILURE_PLAN_DETAILS,
    
    REQUEST_PLAN_LIST, 
    SUCCESS_PLAN_LIST, 
    FAILURE_PLAN_LIST,
    
    SUCCESS_PLAN_UPDATE 
} from "../actions";

const defaultState = {
    isFetching: false,
    list: []
};

export default function plans(state = defaultState, action) {
    switch (action.type) {
        
        case REQUEST_PLAN_LIST:
            return Object.assign({}, state, {
                        isFetching: true
                    });
        case SUCCESS_PLAN_LIST:
            return Object.assign({}, state, {
                isFetching: false,
                list: action.body
            });
        case FAILURE_PLAN_LIST:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.body
            });
        case REQUEST_PLAN_DETAILS:
            return Object.assign({}, state, {
                list: {
                    isFetching: true
                }
            });
        case SUCCESS_PLAN_DETAILS:
            return Object.assign({}, state, {
                list: [...state.list, action.body],
                isFetching: false
            });
        case FAILURE_PLAN_DETAILS:
            return Object.assign({}, state, {
                isFetching: false
            });
        case FAILURE_PLAN_DETAILS:
            return Object.assign({}, state, {
                isFetching: false
            });
        case SUCCESS_PLAN_UPDATE:
            let index = -1;
            
            for(let i = 0; i < state.list.length; i++) {
                if(state.list[i] && (state.list[i].id == action.id)) {
                    index = i;
                    break;
                }
            }
             
            return Object.assign({}, state, {
                isFetching: false,
                list: [...state.list.slice(0, index - 1), action.body, ...state.list.slice(index + 1, state.list.length)]    
            });
        default:
            return state;
    }
}