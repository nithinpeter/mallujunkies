import React     from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from 'components';
import { App } from "./containers/app/app";
import { TodoApp } from "./containers/todo-app";

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={TodoApp}/>]
  </Route>
  
);
 