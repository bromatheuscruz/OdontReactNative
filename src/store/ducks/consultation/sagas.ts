import { put, call } from "redux-saga/effects";
import { consultationFailure, consultationSuccess } from "./actions";
import { PayloadAction } from "typesafe-actions";
import { ConsultationTypes } from "./types";
import httpClient from "../../../services/HttpService";
import Constants from "../../../Constants";

export function* consultation(
  action: PayloadAction<ConsultationTypes.CONSULTATION_REQUEST, number>
) {
  try {
    const resource = Constants.api.CONSULTATION.replace(
      ":id",
      action.payload.toString()
    );
    const response = yield call(httpClient.get, resource);
    yield put(consultationSuccess(response.data.data));
  } catch (err) {
    yield put(consultationFailure());
  }
}
