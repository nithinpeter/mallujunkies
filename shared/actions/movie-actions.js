import fetch from "isomorphic-fetch";
import http from '../../utils/http-client';

export const REQUEST_MOVIE_DETAILS = "REQUEST_MOVIE_DETAILS";
export const SUCCESS_MOVIE_DETAILS = "SUCCESS_MOVIE_DETAILS";
export const FAILURE_MOVIE_DETAILS = "FAILURE_MOVIE_DETAILS";



export function fetchMovieDetails(dispatch, id) {
    dispatch({
        type: REQUEST_MOVIE_DETAILS,
        movieId: id
    });

    return new Promise((resolve, reject) => http.get(`/api/movies/${id}`).then((response) => {
        console.log("API RESPONSE::RECEIVED");
        resolve(dispatch({
            type: SUCCESS_MOVIE_DETAILS,
            movieId: id,
            body: response
        }));
        },
        (error) => {
            reject(dispatch({
                type: FAILURE_MOVIE_DETAILS,
                movieId: id
            }));
        }))
    
}





// export function fetchMovieDetails(id) {

//     return {
//         // Types of actions to emit before and after
//         types: [REQUEST_MOVIE_DETAILS, SUCCESS_MOVIE_DETAILS, FAILURE_MOVIE_DETAILS],

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