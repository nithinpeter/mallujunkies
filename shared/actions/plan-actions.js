import fetch from "isomorphic-fetch";
import http from '../../utils/http-client';
import { firebaseApp } from '../../utils/firebase-config'

export const REQUEST_PLAN_DETAILS = "REQUEST_PLAN_DETAILS";
export const SUCCESS_PLAN_DETAILS = "SUCCESS_PLAN_DETAILS";
export const FAILURE_PLAN_DETAILS = "FAILURE_PLAN_DETAILS";


export const REQUEST_PLAN_LIST = "REQUEST_PLAN_LIST";
export const SUCCESS_PLAN_LIST = "SUCCESS_PLAN_LIST";
export const FAILURE_PLAN_LIST = "FAILURE_PLAN_LIST";



export function fetchPlanDetails(dispatch, id) {
    dispatch({
        type: REQUEST_PLAN_DETAILS,
        movieId: id
    });

    return new Promise((resolve, reject) => http.get(`/api/movies/${id}`).then((response) => {
        console.log("API RESPONSE::RECEIVED");
        resolve(dispatch({
            type: SUCCESS_PLAN_DETAILS,
            movieId: id,
            body: response
        }));
        },
        (error) => {
            reject(dispatch({
                type: FAILURE_PLAN_DETAILS,
                movieId: id
            }));
        }))
    
}

export function fetchPlans(dispatch) {
    dispatch({
        type: REQUEST_PLAN_LIST
    });
    
    return new Promise((resolve, reject) => {
        
        firebaseApp.database().ref('plans').on('value', function(snapshot) {
            console.log("SNAPSHOT::", snapshot.val());
            resolve(dispatch({
                type: SUCCESS_PLAN_LIST,
                body: snapshot.val(),
                lastFetched: new Date()
            }))
        });
        
    })
    
    
    
    // return new Promise((resolve, reject) => http.get(`/api/movies`).then((response) => {
    //     console.log("API RESPONSE::RECEIVED");
    //     resolve(dispatch({
    //         type: SUCCESS_PLAN_LIST,
    //         body: response,
    //         lastFetched: new Date()
    //     }));
    //     },
    //     (error) => {
    //         reject(dispatch({
    //             type: FAILURE_PLAN_LIST,
    //             body: error
    //         }));
    //     }))
    
}





// export function fetchMovieDetails(id) {

//     return {
//         // Types of actions to emit before and after
//         types: [REQUEST_PLAN_DETAILS, SUCCESS_PLAN_DETAILS, FAILURE_PLAN_DETAILS],

//         // Check the cache (optional):
//         // shouldCallAPI: (state) => state.posts.data.length === 0 && !state.posts.isLoading,

//         // Perform the fetching:
//         callAPI: () => http.get(`/api/movies/${id}`),

//         // Arguments to inject in begin/end actions
//         payload: {
//             movieId: id
//         },
//     };
// }