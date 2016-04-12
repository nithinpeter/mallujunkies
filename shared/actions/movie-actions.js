import fetch from "isomorphic-fetch";

export const REQUEST_MOVIE_DETAILS = "REQUEST_MOVIE_DETAILS";
export const RECEIVE_MOVIE_DETAILS = "RECEIVE_MOVIE_DETAILS";

function requestMovieDetails() {
    return {
        type: REQUEST_MOVIE_DETAILS,
        movieId: "jb"
    }
}

function receiveMovieDetails(json) {
    console.log("receiveMovieDetails", json);
    return {
        type: RECEIVE_MOVIE_DETAILS,
        details: json,
        movieId: "jb"
    }
}

export function fetchMovieDetails() {
    return dispatch => {
        dispatch(requestMovieDetails())
        return fetch(`http://www.omdbapi.com/?i=tt3040964&plot=short&r=json`)
            .then(response => response.json())
            .then(json => dispatch(receiveMovieDetails(json)))
    }
}