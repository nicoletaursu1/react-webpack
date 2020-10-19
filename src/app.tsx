import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";

import "../public/sass/styles.scss";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";

import store from "./store";
import actions from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  let token = sessionStorage.getItem("token");
  if (token) {
    dispatch(actions.setAccount());
  }

  return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/login" component={SigninPage} exact />
        </Switch>
      </Router>
  );
};

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
