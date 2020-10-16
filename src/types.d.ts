export enum Actions {
  SIGNUP = "SIGNUP",
  LOGIN = "LOGIN",
  AUTH_SUCCESS = "AUTH_SUCCES",
  AUTH_FAILURE = "AUTH_FAILURE",
  UPDATE_ACCOUNT = "UPDATE_ACCOUNT",
  GET_ACCOUNT = "GET_ACCOUNT",
  UPDATE_SUCCESS = "UPDATE_SUCCESS",
  UPDATE_FAILURE = "UPDATE_FAILURE",
  UPDATE_USER = "UPDATE_USER",
}

export interface IUserAction {
  type: string;
  payload: {
    id: string;
    email: string;
  };
}
export interface IUserState {
  id: string,
  email: string
}

export interface IAccountAction {
  type: string;
  payload: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
}

export interface IAccountState {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  successful: boolean;
  message: string;
}

export interface IAuthAction {
  type: string;
  email: string;
  password: string;
}

export interface IUserData {
  id?: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export interface IAuthState {
  authorized: boolean;
  requesting: boolean;
  successful: boolean;
  message: string;
}

export interface IAction {
  type: string;
  message: string;
}
