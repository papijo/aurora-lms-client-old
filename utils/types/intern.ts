import { University } from "./university";

export interface Interns {
  totalCount: number;
  activeInternCount: number;
  graduatedInternCount: number;
  transferredInternCount: number;
  interns: [];
}

export interface Intern {
  id: number;
  name: string;
  phonenumber: string;
  email: string;
  status: string;
  laboratory: string;
  startDate: string;
  endDate: string;
  university: University;
}
