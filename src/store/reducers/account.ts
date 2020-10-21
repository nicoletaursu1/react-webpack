import { Actions, IAccountState, IAccountAction } from "../../types.d";

const initialState: IAccountState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  successful: false,
  message: "",
};

const accountReducer = (state = initialState, action?: IAccountAction) => {
  switch (action.type) {
    case Actions.GET_ACCOUNT: {
      return state;
    }

    case Actions.UPDATE_SUCCESS: {
      const account = action.payload;

      return {
        ...state,
        id: account.id,
        email: account.email,
        firstName: account.firstName,
        lastName: account.lastName,
        phoneNumber: account.phoneNumber,
        successful: true,
        message: "Updated successfully!",
      };
    }

    case Actions.UPDATE_FAILURE: {
      return {
        ...state,
        successful: false,
        message: "Something went wrong",
      };
    }

    case Actions.LOGOUT: {
      return {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        successful: false,
        message: "",
      };
    }
    default:
      return state;
  }
};

export default accountReducer;
