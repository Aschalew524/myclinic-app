import { useEffect, useRef } from "react";
import type { Appointment, Patient, Provider } from "../types";
import { PatientNotes } from "./PatientNotes";
import { StatusBadge } from "./StatusBadge";

interface AppointmentDrawerProps {
  appointment: Appointment;
  patient: Patient;
  provider: Provider;
  onClose: () => void;
}

export function AppointmentDrawer({
  appointment,
  patient,
  provider,
  onClose,
}: AppointmentDrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="drawer-backdrop" role="presentation" onClick={onClose}>
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="visit-drawer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="ghost-button" onClick={onClose}>
          Close visit
        </button>
        <h2 id="visit-drawer-title">{patient.name}</h2>
        <p className="muted">
          {provider.name} · {appointment.startTime} · Room {appointment.room}
        </p>
        <p>
          <StatusBadge status={appointment.status} />
        </p>
        <p>{appointment.reason}</p>
        <PatientNotes note={appointment.note} noteId={`${appointment.id}-drawer`} />
      </aside>
    </div>
  );
}
