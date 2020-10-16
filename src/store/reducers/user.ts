import { Actions, IUserState, IUserAction } from "../../types.d";

const initialState: IUserState = {
  id: "",
  email: "",
};

const userReducer = (state = initialState, action: IUserAction) => {
  switch (action.type) {
    case Actions.UPDATE_USER: {
      const user = action.payload;
      return {
        id: user.email,
        email: user.email,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
