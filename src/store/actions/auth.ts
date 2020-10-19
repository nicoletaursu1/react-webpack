import { Actions, IAuthAction } from "../../types.d";

export const signUp = (email: string, password: string): IAuthAction => {
  return {
    type: Actions.SIGNUP,
    email: email,
    password: password,
  };
};

export const login = (email: string, password: string): IAuthAction => {
  return {
    type: Actions.LOGIN,
    email: email,
    password: password
  }
}
