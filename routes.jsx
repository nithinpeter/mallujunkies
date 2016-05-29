import React     from 'react';
import { Route, IndexRoute } from 'react-router';
// import App from 'components';
import { App } from "./containers/app/app";
import { TodoApp } from "./containers/todo-app";
import Movie from "./containers/movie";
import MovieList from "./containers/movie-list";
import PlanList from "./containers/plan-list";
import PlanDetails from "./containers/plan-details";
import Login from "./containers/login";
import store from "./store";
import { firebaseApp } from "./utils/firebase-config";
import { SUCCESS_LOGIN } from "./shared/actions";
import common from "./utils/common";

function authRouteResolver(firebaseApp) {
  return (nextState, replace) => {

    if(!common.isBrowser()) return;
    // const user = firebaseApp.auth().currentUser;
    
    const { pathname } = nextState.location;
    // console.log(user, pathname);
    
    let user;
    for (let key in window.localStorage) {
      if (key.startsWith("firebase:authUser:")) {
        user = window.localStorage[key];
      }
    }

    if (user) {
      store.dispatch({
        type: SUCCESS_LOGIN,
        user: user
      });

      if (pathname !== "/plans") replace({ pathname: "/plans" });

    } else {

      if (pathname !== "/login") replace({ pathname: "/login" });

    }
  }
}

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={PlanList}/>
    <Route name="login" component={Login} path="/login" onEnter={ authRouteResolver(firebaseApp) }></Route>
    <Route name="plans" component={PlanList} path="/plans" onEnter={ authRouteResolver(firebaseApp) }>
      <Route name="planDetails" component={PlanDetails} path=":id"></Route>
    </Route>
    <Route name="movies" component={MovieList} path="/movies"></Route>
    <Route name="movie" component={Movie} path="/movies/:id"></Route>
  </Route>

);


