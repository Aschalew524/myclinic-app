export type VisitStatus =
  | "scheduled"
  | "checked-in"
  | "in-room"
  | "complete"
  | "no-show";

export type VisitType =
  | "wellness"
  | "follow-up"
  | "acute"
  | "procedure"
  | "new-patient";

export type Role = "physician" | "np" | "pa" | "rn";

export type ViewName = "schedule" | "patients" | "staff";

export interface Provider {
  id: string;
  name: string;
  role: Role;
  specialty: string;
  rooms: string[];
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  mrn: string;
  preferredPhone: string;
  status: "active" | "inactive";
  lastVisit: string;
  balance: number;
}

export interface Appointment {
  id: string;
  patientId: string;
  providerId: string;
  date: string;
  startTime: string;
  durationMinutes: number;
  visitType: VisitType;
  status: VisitStatus;
  room: string;
  reason: string;
  note: string;
}

export interface WaitlistEntry {
  id: string;
  patientId: string;
  requestedDate: string;
  visitType: VisitType;
  reason: string;
  createdAt: string;
}

export interface ClinicDay {
  date: string;
  label: string;
}
