import { action } from "typesafe-actions";
import { ConsultationTypes, Consultation } from "./types";

export const consultationRequest = (id: string) =>
  action(ConsultationTypes.CONSULTATION_REQUEST, id);
export const consultationSuccess = (data: Consultation) =>
  action(ConsultationTypes.CONSULTATION_SUCCESS, { data });
export const consultationFailure = () =>
  action(ConsultationTypes.CONSULTATION_FAILURE);
