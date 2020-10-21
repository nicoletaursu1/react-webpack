import { combineReducers } from "redux";
import accountReducer from "./account";
import authReducer from "./auth";
import sidebarReducer from "./sidebar";

const reducer = combineReducers({ 
  authReducer,
  accountReducer,
  sidebarReducer
});

export default reducer;
