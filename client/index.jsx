import React       from 'react';
import { render }  from 'react-dom';
import { Router }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes      from '../routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider }                     from 'react-redux';
import thunkMiddleware                  from 'redux-thunk';
import createLogger                     from 'redux-logger';
import { default as reducer }           from '../shared/reducers';
import { fromJS }                       from 'immutable';

const history = createBrowserHistory();
let initialState = window.__INITIAL_STATE__;
// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
    .keys(initialState)
    .forEach(key => {
        initialState[key] = fromJS(initialState[key]);
    });
// const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('react-view')
);