import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";

import saga from "./sagas";
import reducer from "./reducers";


const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, middleware);

sagaMiddleware.run(saga);


export default store;
