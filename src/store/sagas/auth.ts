import { call, put } from "redux-saga/effects";
import axios from "axios";
import { Actions, IAuthAction } from "../../types.d";

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

axios.interceptors.response.use(
  (response) => {
    if (response?.data?.accessToken)
      sessionStorage.setItem("token", response.data.accessToken);
    else if (response?.data?.token?.accessToken)
      sessionStorage.setItem("token", response.data.token.accessToken);
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return Promise.reject(error);
    }
  }
);

async function createUser(email: string, password: string): Promise<JSON> {
  const response = await axios({
    method: "POST",
    data: { email, password },
    url: "/user/create",
  }).then((res) => res.data);

  return response;
}

function* signUp(action: IAuthAction) {
  let message;

  try {
    const { email, password } = action;

    yield call(createUser, email, password);
    message = "Signed up successfully!";

    yield put({ type: Actions.SET_USER });
    yield put({ type: Actions.SET_ACCOUNT });

    yield put({ type: Actions.AUTH_SUCCESS, message });
  } catch (e) {
    message = "Something went wrong";

    yield put({ type: Actions.AUTH_FAILURE, message });
  }
}

async function logUser(email: string, password: string): Promise<JSON> {
  const response = await axios({
    method: "POST",
    data: { email, password },
    url: "/user/login",
  }).then((res) => res.data);
  return response;
}

function* login(action: IAuthAction) {
  let message;

  try {
    const { email, password } = action;
    yield call(logUser, email, password);
    message = "Logged in successfully!";

    yield put({ type: Actions.SET_USER });
    yield put({ type: Actions.SET_ACCOUNT });

    yield put({ type: Actions.AUTH_SUCCESS, message });
  } catch (e) {
    message = "Something went wrong";

    yield put({ type: Actions.AUTH_FAILURE, message });
  }
}

export { signUp, login };
