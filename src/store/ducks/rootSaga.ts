import { all, takeLatest } from "redux-saga/effects";

import { IdentityTypes } from "./identity/types";
import { auth } from "./identity/sagas";
import { consultation } from "./consultation/sagas";
import { ConsultationTypes } from "./consultation/types";

export default function* rootSaga() {
  return yield all([
    takeLatest(IdentityTypes.AUTH_REQUEST, auth),
    takeLatest(ConsultationTypes.CONSULTATION_REQUEST, consultation)
  ]);
}
