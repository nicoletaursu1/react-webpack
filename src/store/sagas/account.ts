import { call, put, CallEffect, PutEffect } from "redux-saga/effects";
import axios from "axios";
import { Actions, IAccountAction, IUserData } from "../../types.d";

axios.defaults.baseURL = "http://localhost:3003/";

axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


async function updateAccountInfo(payload: IUserData): Promise<JSON> {
  const response = await axios({
    method: "PUT",
    data: payload,
    url: "/account"
  }).then((res) => res.data);

  return response;
}

async function getAccountInfo(): Promise<JSON> {
  const response = await axios({
    method: "GET",
    url: "/account",
  }).then((res) => res.data);
  return response;
}

// when user decides to change the data:
function* updateAccount(action: IAccountAction): Iterable<PutEffect<{ type: Actions}> | CallEffect<JSON>> {
  try {
    const { payload } = action;
    let number = payload.phoneNumber.replace('+', '');
    const match = number.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      number = `${match[1]}${match[2] ? ' ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
    }
    yield call(updateAccountInfo, { ...payload, phoneNumber: number });
    yield put({ type: Actions.UPDATE_SUCCESS, payload});
  } catch (e) {
    yield put({ type: Actions.UPDATE_FAILURE});
  }
}

// when user logs in or signs up:
function* setAccount(): Iterable<PutEffect<{ type: Actions}> | CallEffect<JSON>> {
  try {
    const accData = yield call(getAccountInfo);

    yield put({type: Actions.AUTH_SUCCESS, payload: accData});
    yield put({type: Actions.UPDATE_SUCCESS, payload: accData});
    yield put({type: Actions.UPDATE_USER, payload: accData});
  } catch (e) {
    console.error(e)
  }
}

export { updateAccount, setAccount }
