import { 
    REQUEST_PLAN_DETAILS, 
    SUCCESS_PLAN_DETAILS, 
    FAILURE_PLAN_DETAILS,
    
    REQUEST_PLAN_LIST, 
    SUCCESS_PLAN_LIST, 
    FAILURE_PLAN_LIST 
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
            console.log("SUCCESS_PLAN_DETAILS", action.body);
            return Object.assign({}, state, {
                list: [...state.list, action.body],
                isFetching: false
            });
        case FAILURE_PLAN_DETAILS:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}