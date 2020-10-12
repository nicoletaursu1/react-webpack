import { Actions, IAuth } from "../types.d";

export const signUp = (email: string, password: string): IAuth => {
  console.log("signup action called");
  return {
    type: Actions.SIGNUP,
    email: email,
    password: password,
  };
};

export const signIn = (email: string, password: string): IAuth => ({
  type: Actions.SIGNIN,
  email: email,
  password: password,
});
