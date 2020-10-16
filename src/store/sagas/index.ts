import { takeLatest } from 'redux-saga/effects';
import { signUp, login } from './auth';
import { getAccountInfo, updateAccount } from './account';

function* Saga() {
  yield takeLatest("SIGNUP", signUp);
  yield takeLatest("LOGIN", login);
  yield takeLatest("UPDATE_ACCOUNT", updateAccount);
  yield takeLatest("GET_ACCOUNT", getAccountInfo);
}

export default Saga;