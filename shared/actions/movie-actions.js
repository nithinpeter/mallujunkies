import fetch from "isomorphic-fetch";

export const REQUEST_MOVIE_DETAILS = "REQUEST_MOVIE_DETAILS";
export const RECEIVE_MOVIE_DETAILS = "RECEIVE_MOVIE_DETAILS";

function requestMovieDetails(id) {
    return {
        type: REQUEST_MOVIE_DETAILS,
        movieId: id
    }
}

function receiveMovieDetails(id, json) {
    console.log("receiveMovieDetails", json);
    return {
        type: RECEIVE_MOVIE_DETAILS,
        details: json,
        movieId: id
    }
}

export function fetchMovieDetails(id) {
    return dispatch => {
        dispatch(requestMovieDetails(id))
        return fetch(`http://api.mallujunkies.com/api/movies/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveMovieDetails(id, json)))
    }
}