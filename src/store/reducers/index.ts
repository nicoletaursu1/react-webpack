import { combineReducers } from "redux";
import accountReducer from "./account";
import authReducer from "./auth";

const reducer = combineReducers({ 
  authReducer: authReducer,
  accountReducer: accountReducer
});

export default reducer;
