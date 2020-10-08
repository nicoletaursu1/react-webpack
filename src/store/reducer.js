import { combineReducers } from "redux";
import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS } from "./actions";
import { authorize } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return { ...state, token: payload };
    }

    case AUTH_FAILURE: {
      return {
        ...state,
        error: payload,
      };
    }

    default:
      return state;
  }
};

const reducer = combineReducers({ auth: authReducer });

export default reducer;