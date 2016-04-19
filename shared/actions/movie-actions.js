import fetch from "isomorphic-fetch";
import http from '../../utils/http-client';

export const REQUEST_MOVIE_DETAILS = "REQUEST_MOVIE_DETAILS";
export const SUCCESS_MOVIE_DETAILS = "SUCCESS_MOVIE_DETAILS";
export const FAILURE_MOVIE_DETAILS = "FAILURE_MOVIE_DETAILS";


export function fetchMovieDetails(id) {
    
    return {
        // Types of actions to emit before and after
        types: [REQUEST_MOVIE_DETAILS, SUCCESS_MOVIE_DETAILS, FAILURE_MOVIE_DETAILS],

        // Check the cache (optional):
        // shouldCallAPI: (state) => state.posts.data.length === 0 && !state.posts.isLoading,

        // Perform the fetching:
        callAPI: () => http.get(`/api/movies/${id}`),

        // Arguments to inject in begin/end actions
        payload: {
            movieId: id
        },
    };
}