import { call, put } from "redux-saga/effects";
import axios from "axios";
import { Actions, IAccountAction, IUserData } from "../../types.d";

axios.defaults.baseURL = "http://localhost:3003/";

async function updateAccountInfo(payload: IUserData): Promise<JSON> {
  const response = await axios({
    method: "PUT",
    data: payload,
    url: "/account",
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

function* updateAccount(action: IAccountAction) {
  let message;

  try {
    const { payload } = action;

    yield call(updateAccountInfo, payload);
    message = "Updated successfully!";
    yield put({ type: Actions.UPDATE_SUCCESS, message });
  } catch (e) {
    message = "Something went wrong";
    yield put({ type: Actions.UPDATE_FAILURE, message });
  }
}

function* getAccount() {
  try {
    const payload = yield call(getAccountInfo);
    yield put({ type: Actions.GET_ACCOUNT, payload});
  } catch (e) {
    console.error(e)
  }
}

export { updateAccount, getAccount }