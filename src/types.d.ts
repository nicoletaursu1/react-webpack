export enum Actions {
  SIGNUP = "SIGNUP",
  LOGIN = "LOGIN",
  AUTH_SUCCESS = "AUTH_SUCCES",
  AUTH_FAILURE = "AUTH_FAILURE",
  AUTH_FINISHED = "AUTH_FINISHED"
}

export interface IAuth {
  type: string,
  email: string,
  password: string
}

export interface IUserData {
  email: string,
  password: string,
  confirmPassword?: string
}

export interface IUserState {
  authorized: boolean,
  requesting: boolean,
  successful: boolean,
  message: string
}

export interface IAction {
  type: string,
  message: string
}