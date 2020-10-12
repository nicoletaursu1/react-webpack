export enum Actions {
  SIGNUP = "SIGNUP",
  SIGNIN = "SIGNIN",
  AUTH_SUCCESS = "AUTH_SUCCES",
  AUTH_FAILURE = "AUTH_FAILURE",
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
  requesting: boolean,
  successful: boolean,
  message: string
}

export interface IAction {
  type: string,
  message: string
}