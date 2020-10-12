import { combineReducers } from "redux";
import { Actions, IUserState, IAction } from "../types.d";

const initialState: IUserState = {
  requesting: false,
  successful: false,
  message: ''
};

const authReducer = (state = initialState, { type, message }: IAction) => {
  switch (type) {
    case Actions.SIGNUP: {
      return { 
        ...state,
        requesting: true
      };
    }

    case Actions.AUTH_SUCCESS: {
      return {
        requesting: false,
        successful: true,
        message
      }
    }

    case Actions.AUTH_FAILURE: {
      return {
        requesting: false,
        successful: false,
        message
      };
    }

    default:
      return state;
  }
};

// const reducer = combineReducers({ authReducer: authReducer });

export default authReducer;
