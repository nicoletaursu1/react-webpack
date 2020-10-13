import { combineReducers } from "redux";
import { Actions, IUserState, IAction } from "../types.d";

const initialState: IUserState = {
  authorized: false,
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

    case Actions.LOGIN: {
      return {
        ...state,
        requesting: true
      }
    }
    case Actions.AUTH_SUCCESS: {
      return {
        authorized: true,
        requesting: false,
        successful: true,
        message
      }
    }

    case Actions.AUTH_FAILURE: {
      return {
        authorized: false,
        requesting: false,
        successful: false,
        message
      };
    }

    case Actions.AUTH_FINISHED: {
      return {
        ...state,
        requesting: false,
        successful: false
      }
    }

    default:
      return state;
  }
};

// const reducer = combineReducers({ authReducer: authReducer });

export default authReducer;
