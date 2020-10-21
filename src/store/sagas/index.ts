import { takeLatest } from 'redux-saga/effects';

import { Actions } from '../../types.d';
import { signUp, login } from './auth';
import { setAccount, updateAccount } from './account';

function* Saga() {
  yield takeLatest(Actions.SIGNUP, signUp);
  yield takeLatest(Actions.LOGIN, login);
  yield takeLatest(Actions.UPDATE_ACCOUNT, updateAccount);
  yield takeLatest(Actions.SET_ACCOUNT, setAccount);
  yield takeLatest(Actions.SET_USER, setAccount);
}

export default Saga;