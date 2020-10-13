import {takeLatest} from 'redux-saga/effects';
import { signUp, login } from './auth';

function* Saga() {
  yield takeLatest("SIGNUP", signUp);
  yield takeLatest("LOGIN", login);
}

export default Saga;