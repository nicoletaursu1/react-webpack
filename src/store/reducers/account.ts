import { Actions, IAccountState, IAccountAction } from '../../types.d';

const initialState: IAccountState = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  successful: false,
  message: '',
}



const accountReducer = (state = initialState, action?: IAccountAction, message?: string) => {
  console.log('state: ', state);

  switch(action.type) {
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
        message: message
      }
    }

    case Actions.UPDATE_FAILURE: {
      return {
        ...state,
        successful: false,
        message: message
      }
    }

    default: return state;
  }
}

export default accountReducer;
