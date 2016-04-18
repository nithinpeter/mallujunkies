import React     from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from 'components';
import { App } from "./containers/app/app";
import { TodoApp } from "./containers/todo-app";
import Movie from "./containers/movie";

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={TodoApp}/>
    <Route name="movie" component={Movie} path="/cinema/:movieId"></Route>
  </Route>
  
);
 