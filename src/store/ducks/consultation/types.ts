import { ConsultationMarked } from "../../../models/ConsultationMarked";

export enum ConsultationTypes {
  CONSULTATION_REQUEST = "@consultation/CONSULTATION_REQUEST",
  CONSULTATION_SUCCESS = "@consultation/CONSULTATION_SUCCESS",
  CONSULTATION_FAILURE = "@consultation/CONSULTATION_FAILURE"
}

export interface Consultation {
  consultationMarkeds: ConsultationMarked[];
}

export interface ConsultationState {
  readonly data: ConsultationMarked[];
  readonly loading: boolean;
  readonly hasError: boolean;
}
