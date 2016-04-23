import { 
    REQUEST_MOVIE_DETAILS, 
    SUCCESS_MOVIE_DETAILS, 
    FAILURE_MOVIE_DETAILS,
    
    REQUEST_MOVIE_LIST, 
    SUCCESS_MOVIE_LIST, 
    FAILURE_MOVIE_LIST 
} from "../actions";

const defaultState = {};

// function getDetails(state = { isFetching: false, details: {} }, action) {
//     switch (action.type) {
//         case REQUEST_MOVIE_DETAILS:
//             return {
//                 isFetching: true
//             };
//         case RECEIVE_MOVIE_DETAILS:
//             return {
//                 isFetching: false,
//                 details: action.details
//             };
//         default:
//             return state;
//     }
// }


export default function movies(state = defaultState, action) {
    switch (action.type) {
        
        case REQUEST_MOVIE_LIST:
            return {
                isFetching: true
            };
        case SUCCESS_MOVIE_LIST:
            return {
                isFetching: false,
                list: action.body
            }
        case FAILURE_MOVIE_LIST:
            return {
                isFetching: false,
                error: action.body
            };
        case REQUEST_MOVIE_DETAILS:
            return {
                list: {
                    [action.movieId]: {
                        isFetching: true
                    }
                }
            };
        case SUCCESS_MOVIE_DETAILS:
            return {
                list: {
                    [action.movieId]: {
                        isFetching: false,
                        details: action.body
                    }
                }
            };
        case FAILURE_MOVIE_DETAILS:
            return {
                list: {
                    [action.movieId]: {
                        isFetching: false,
                        error: action.body
                    }
                }
            };
        default:
            return state;
    }
}