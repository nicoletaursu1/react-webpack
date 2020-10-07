import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import "../public/sass/styles.scss";
import SignupPage from "./pages/SignupPage";
import SigninPage from './pages/SigninPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1 style={{fontSize: '40px'}}>Hello</h1>
          <Link to='/signup' style={{fontSize: '20px'}}><h5>Sign up</h5></Link>
        </Route>
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
