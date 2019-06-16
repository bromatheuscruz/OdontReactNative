export interface Doctor {
  _id: string;
  daysOfService: DaysOfService[];
  name: string;
  document: string;
}

export enum DaysOfService {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY"
}
