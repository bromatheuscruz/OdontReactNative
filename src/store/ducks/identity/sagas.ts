import { call, put } from 'redux-saga/effects';
import { authSuccess, authFailure } from './actions';
import { PayloadAction } from 'typesafe-actions';
import { IdentityTypes } from './types';
import { LoginData } from '../../../models/LoginData';
import httpClient from "../../../services/HttpService";
import Constants from '../../../Constants';
import { AsyncStorage } from 'react-native';

export function* auth(action: PayloadAction<IdentityTypes.AUTH_REQUEST, LoginData>) {
    try {
        const response = yield call(httpClient.post, Constants.api.LOGIN, action.payload);
        yield call(AsyncStorage.setItem, Constants.storageItems.TOKEN, response.data.data.token);
        yield put(authSuccess(response.data.data))
    } catch (error) {
        yield put(authFailure());
    }
}