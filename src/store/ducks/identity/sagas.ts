import { call, put } from 'redux-saga/effects';
import http from '../../../services/HttpService';
import Constants from '../../../Constants';
import { authSuccess, authFailure } from './actions';

export function* auth() {
    try {
        const response = yield call(http.get, Constants.api.LOGIN);
        yield put(authSuccess(response.data))
    } catch (error) {
        yield put(authFailure());
    }
}