import express                   from 'express';
import path                      from 'path';
import React                     from 'react';
import Helmet                    from "react-helmet";
import { renderToString }        from 'react-dom/server'
import { RouterContext, match }  from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from './routes';
// import { createStore, applyMiddleware, compose } from 'redux';
import { Provider }              from 'react-redux';
// import thunkMiddleware           from 'redux-thunk';
// import callApiMiddleware         from './shared/middlewares/call-api-middleware';
// import createLogger              from 'redux-logger';
// import {default as reducer }     from './shared/reducers';
import store                     from './store';
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const fetchComponentsData = (dispatch, components, params, query) => {
    console.log("Fetch Components Data Called", params, query);
    const promises = components.filter(component => component.fetchData)
                                .map( component => {
                                    console.log("Component with static fetch data::", component);
                                    return component.fetchData(dispatch, params);
                                });
    
    return Promise.all(promises);
}

app.use(function(req, res, next) {
    GLOBAL.navigator = {
        userAgent: req.headers['user-agent']
    }
    next();
});


app.use((req, res, next) => {
    const location = createLocation(req.url);
    // const reducer = combineReducers(reducers);
    // const store = createStore(reducer, {}, compose(applyMiddleware(thunkMiddleware, callApiMiddleware)));


    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) return res.status(404).end('Not found.');

        const { components, params, query } = renderProps;

        fetchComponentsData(store.dispatch, components, params, query).then(() => {
            console.log("RESOLVED");
            const InitialComponent = (
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
            const initialState = store.getState();
            const componentHTML = renderToString(InitialComponent);
            console.log('Component HTML', componentHTML);
            const head = Helmet.rewind();

            const HTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="google-site-verification" content="WfX3OyIL4W-l0BQSNqs4CfjjqOq0zIewY14ohAa9c_I" />
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    ${head.title.toString()}
                    <script type="application/javascript">
                        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                    </script>
                </head>
                <body>
                    <div id="react-view">${componentHTML}</div>
                    <script type="application/javascript" src="/bundle.js"></script>
                </body>
            </html>    
            `
            res.end(HTML);
        })

    });

});

// app.use(express.static(__dirname + 'assets'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log('Server listening on', PORT);
});

// export default app;