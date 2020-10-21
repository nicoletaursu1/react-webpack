import { Actions, IAuthState, IAction } from "../../types.d";

const initialState: IAuthState = {
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

    default:
      return state;
  }
};

export default authReducer;
