import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { Actions, IAuth } from "../types.d";

axios.defaults.baseURL = "http://localhost:3003/";

console.log("baseURL", axios.defaults.baseURL);

async function fetchData(email: string, password: string): Promise<JSON> {
  const response = await axios({
    method: "POST",
    data: { email, password },
    url: "/user/create",
    
  }).then((res) => res.data);

  return response;
}

function* authorize(action: IAuth) {
  let message;
  try {
    const { email, password } = action;
    yield call(fetchData, email, password);
    message = "Signed up successfully!";
    yield put({ type: Actions.AUTH_SUCCESS, message });
  } catch (e) {
    const message = "Something went wrong";
    yield put({ type: Actions.AUTH_FAILURE, message });
  }
}

function* Saga() {
  yield takeLatest("SIGNUP", authorize);
}

export default Saga;
