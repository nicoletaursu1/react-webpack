import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './actions';

const fetchData = (url, options = {}) => {
    new Promise((resolve, reject) => {
        return axios.get(url, options)
            .then(res => res.status !== 200 ? reject(res) : res)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}

function* authorize({ payload: {email, password} }) {
    const options = {
        body: JSON.stringify({email, password})
    };

    try {
        const { token } = yield call(fetchData, '/signin', options);
        yield put({ type: AUTH_SUCCESS, payload: token});
        localStorage.setItem('token', token);
    } catch (error) {
        const message = 'Something went wrong';
        yield put({ type: AUTH_FAILURE, payload: message });
        localStorage.removeItem('token');
    }
}

function* Saga() {
    yield takeLatest(AUTH_REQUEST, authorize);
}

export default Saga;