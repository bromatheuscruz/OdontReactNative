import { all, takeLatest } from 'redux-saga/effects';

import { IdentityTypes } from './identity/types';
import { auth } from  './identity/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(IdentityTypes.AUTH_REQUEST, auth)
    ]);
};
