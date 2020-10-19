import { Actions, IUserAction, IUserData } from '../../types.d';

export const updateUser = ( payload: IUserData ): IUserAction => {
  return {
    type: Actions.UPDATE_USER,
    payload: {
      id: payload.id,
      email: payload.email
    }
  }
}
