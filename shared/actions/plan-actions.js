import fetch from "isomorphic-fetch";
import http from '../../utils/http-client';
import { firebaseApp } from '../../utils/firebase-config'

export const REQUEST_PLAN_DETAILS = "REQUEST_PLAN_DETAILS";
export const SUCCESS_PLAN_DETAILS = "SUCCESS_PLAN_DETAILS";
export const FAILURE_PLAN_DETAILS = "FAILURE_PLAN_DETAILS";


export const REQUEST_PLAN_LIST = "REQUEST_PLAN_LIST";
export const SUCCESS_PLAN_LIST = "SUCCESS_PLAN_LIST";
export const FAILURE_PLAN_LIST = "FAILURE_PLAN_LIST";

export const SUCCESS_PLAN_UPDATE = "SUCCESS_PLAN_UPDATE";



export function fetchPlanDetails(dispatch, id) {
    dispatch({
        type: REQUEST_PLAN_DETAILS,
        id: id
    });

    console.log(id);

    return new Promise((resolve, reject) => {

        firebaseApp.database().ref('plans/' + id).on('value', function (snapshot) {
            console.log("SNAPSHOT::", snapshot.val());
            resolve(dispatch({
                type: SUCCESS_PLAN_DETAILS,
                body: snapshot.val(),
                lastFetched: new Date()
            }))
        });

    })
}

export function fetchPlans(dispatch) {
    dispatch({
        type: REQUEST_PLAN_LIST
    });

    return new Promise((resolve, reject) => {

        firebaseApp.database().ref('plans').on('value', function (snapshot) {
            console.log("SNAPSHOT::", snapshot.val());
            resolve(dispatch({
                type: SUCCESS_PLAN_LIST,
                body: snapshot.val(),
                lastFetched: new Date()
            }))
        });
    })
}

export function submitResponse(dispatch, payload, planId) {
    return new Promise((resolve, reject) => {
        firebaseApp.database().ref('plans/' + planId + '/responses').push(payload);
    })
}

export function registerListeners(dispatch, planId) {
    firebaseApp.database().ref('plans').on('child_changed', function (snapshot) {
        console.log("SNAPSHOT::", snapshot.val());
        dispatch({
            type: SUCCESS_PLAN_UPDATE,
            body: snapshot.val(),
            lastFetched: new Date(),
            id: planId
        })
    });

}