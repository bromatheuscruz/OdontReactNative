import { Doctor } from "./Doctor";
import { Pacient } from "./Pacient";

export interface ConsultationMarked {
  id: string;
  day: string;
  hour: string;
  doctor: Doctor;
  pacient: Pacient;
  description: string;
  type: string;
}
