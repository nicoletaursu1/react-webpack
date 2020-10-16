import { Actions, IAccountAction, IUserData } from "../../types.d";

export const updateAccount = (payload: IUserData): IAccountAction => {
  return {
    type: Actions.UPDATE_ACCOUNT,
    payload: {
      id: payload.id,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      phoneNumber: payload.phoneNumber
    }
  }
}

