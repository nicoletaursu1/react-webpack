import { Actions, IAuth } from "../../types.d";

export const signUp = (email: string, password: string): IAuth => {
  return {
    type: Actions.SIGNUP,
    email: email,
    password: password,
  };
};

export const login = (email: string, password: string): IAuth => {
  return {
    type: Actions.LOGIN,
    email: email,
    password: password
  }
}
