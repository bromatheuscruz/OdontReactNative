import { Doctor } from "./Doctor";
import { Pacient } from "./Pacient";

export interface ConsultationMarked {
  id: string;
  day: string;
  hour: string;
  doctor: Doctor;
  pacient: Pacient;
  description: string;
  type: ConsultationTypes;
  status: ConsultationStatus;
}

export enum ConsultationTypes {
  MAINTENANCE = "MAINTENANCE",
  EVALUATION = "EVALUATION"
}

export enum ConsultationStatus {
  FINISHED = "FINISHED",
  SCHEDULE = "SCHEDULE",
  MISSED = "MISSED"
}
