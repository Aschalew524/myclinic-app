import type { Appointment, Patient, Provider } from "../types";
import { PatientNotes } from "./PatientNotes";
import { StatusBadge } from "./StatusBadge";

const VISIT_LABELS = {
  wellness: "Wellness",
  "follow-up": "Follow-up",
  acute: "Acute",
  procedure: "Procedure",
  "new-patient": "New patient",
} as const;

interface AppointmentCardProps {
  appointment: Appointment;
  patient: Patient;
  provider: Provider;
  onOpen: (appointmentId: string) => void;
}

export function AppointmentCard({
  appointment,
  patient,
  provider,
  onOpen,
}: AppointmentCardProps) {
  return (
    <article>
      <button
        type="button"
        className="card"
        onClick={() => onOpen(appointment.id)}
        aria-label={`Open visit for ${patient.name} at ${appointment.startTime}`}
      >
        <div className="card__top">
          <div>
            <h2>{patient.name}</h2>
            <p className="muted">
              {provider.name} · Room {appointment.room} · {appointment.startTime}
            </p>
          </div>
          <StatusBadge status={appointment.status} />
        </div>
        <div className="chips">
          <span className="chip">{VISIT_LABELS[appointment.visitType]}</span>
          <span className="chip">{appointment.reason}</span>
          <span className="chip">MRN {patient.mrn}</span>
        </div>
      </button>
      <PatientNotes note={appointment.note} noteId={appointment.id} />
    </article>
  );
}
