import type { Appointment, Patient, Provider } from "../types";
import { AppointmentCard } from "./AppointmentCard";

interface ScheduleBoardProps {
  appointments: Appointment[];
  patientsById: Record<string, Patient>;
  providersById: Record<string, Provider>;
  onOpenAppointment: (appointmentId: string) => void;
}

function groupByTime(appointments: Appointment[]): [string, Appointment[]][] {
  const groups = new Map<string, Appointment[]>();

  for (const appointment of appointments) {
    const current = groups.get(appointment.startTime) ?? [];
    current.push(appointment);
    groups.set(appointment.startTime, current);
  }

  return [...groups.entries()].sort(([left], [right]) => left.localeCompare(right));
}

export function ScheduleBoard({
  appointments,
  patientsById,
  providersById,
  onOpenAppointment,
}: ScheduleBoardProps) {
  const slots = groupByTime(appointments);

  if (slots.length === 0) {
    return (
      <div className="panel empty" role="status">
        No visits are on the board for this day and provider filter.
      </div>
    );
  }

  return (
    <div className="board">
      {slots.map(([time, visits]) => (
        <section className="slot" key={time} aria-label={`Visits at ${time}`}>
          <div className="slot__time">{time}</div>
          <div className="cards">
            {visits.map((appointment) => {
              const patient = patientsById[appointment.patientId];
              const provider = providersById[appointment.providerId];
              if (!patient || !provider) {
                return null;
              }
              return (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  patient={patient}
                  provider={provider}
                  onOpen={onOpenAppointment}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
