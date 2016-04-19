import express                   from 'express';
import path                      from 'path';
import React                     from 'react';
import Helmet                    from "react-helmet";
import { renderToString }        from 'react-dom/server'
import { RouterContext, match }  from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from './routes';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider }              from 'react-redux';
import thunkMiddleware           from 'redux-thunk';
import callApiMiddleware         from './shared/middlewares/call-api-middleware';
import createLogger              from 'redux-logger';
import {default as reducer }     from './shared/reducers';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
    const location = createLocation(req.url);
    // const reducer = combineReducers(reducers);
    const store = createStore(reducer, {}, compose(applyMiddleware(thunkMiddleware, callApiMiddleware)));

    
    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }
    
        if (!renderProps) return res.status(404).end('Not found.');

        const InitialComponent = (
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );
        const initialState = store.getState();
        const componentHTML = renderToString(InitialComponent);
        const head = Helmet.rewind();
        
        const HTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="google-site-verification" content="WfX3OyIL4W-l0BQSNqs4CfjjqOq0zIewY14ohAa9c_I" />
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
    });

});

// app.use(express.static(__dirname + 'assets'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});

// export default app;