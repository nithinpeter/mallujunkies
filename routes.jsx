import React     from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from 'components';
import { App } from "./containers/app/app";
import { TodoApp } from "./containers/todo-app";
import Movie from "./containers/movie";
import MovieList from "./containers/movie-list";
import PlanList from "./containers/plan-list";
import PlanDetails from "./containers/plan-details";

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={TodoApp}/>
    <Route name="plans" component={PlanList} path="/plans"></Route>
    <Route name="planDetails" component={PlanDetails} path="/plans/:id"></Route>
    <Route name="movies" component={MovieList} path="/movies"></Route>
    <Route name="movie" component={Movie} path="/movies/:id"></Route>
  </Route>
  
);
 