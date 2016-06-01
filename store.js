import { Router, browserHistory }  from 'react-router';
import routes      from './routes';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider }                     from 'react-redux';
import thunkMiddleware                  from 'redux-thunk';
import callApiMiddleware                from './shared/middlewares/call-api-middleware';
import createLogger                     from 'redux-logger';
import { default as reducer }           from './shared/reducers';
// import { fromJS }                       from 'immutable';
import common                           from './utils/common';

let initialState;

if(common.isBrowser())
    initialState = window.__INITIAL_STATE__;
else
    initialState = {};

const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunkMiddleware, callApiMiddleware)
    // , typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
));

export default store;
