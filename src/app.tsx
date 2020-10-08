import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import "../public/sass/styles.scss";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";

import saga from "./store/sagas";
import reducer from "./store/reducer";

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, middleware);

sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/signin" component={SigninPage} exact />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
