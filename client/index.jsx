import React       from 'react';
import { render }  from 'react-dom';
import { Router, browserHistory }  from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes      from '../routes';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider }                     from 'react-redux';
import thunkMiddleware                  from 'redux-thunk';
import callApiMiddleware                from '../shared/middlewares/call-api-middleware';
import createLogger                     from 'redux-logger';
import { default as reducer }           from '../shared/reducers';
import { fromJS }                       from 'immutable';

// const history = createBrowserHistory();
let initialState = window.__INITIAL_STATE__;
// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
    .keys(initialState)
    .forEach(key => {
        initialState[key] = fromJS(initialState[key]);
    });
// const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware, callApiMiddleware));
render(
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('react-view')
);