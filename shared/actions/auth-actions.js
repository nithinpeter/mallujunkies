import fetch from "isomorphic-fetch";
import http from '../../utils/http-client';
import { firebaseApp } from '../../utils/firebase-config';
import NavigationManager from '../../utils/navigation-manager';

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";

export function login(dispatch, email, password) {
    
    if(!email || !password) {
        dispatch({
            type: FAILURE_LOGIN,
            error: {
                message: "Please enter a valid email and password combination."
            }
        });
        return;
    }
    
    dispatch({
        type: REQUEST_LOGIN
    });

    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(function (user) {
        console.log(SUCCESS_LOGIN, user);
        dispatch({
            type: SUCCESS_LOGIN,
            user: user
        });
        NavigationManager.navigateTo("/plans");
    })
    .catch(function (error) {
        console.log(FAILURE_LOGIN, error);
        dispatch({
            type: FAILURE_LOGIN,
            error: error
        })
    });

}
