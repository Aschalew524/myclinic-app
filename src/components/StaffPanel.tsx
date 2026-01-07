import type { Appointment, Provider } from "../types";

interface StaffPanelProps {
  providers: Provider[];
  appointments: Appointment[];
}

export function StaffPanel({ providers, appointments }: StaffPanelProps) {
  return (
    <div className="staff-grid">
      {providers.map((provider) => {
        const load = appointments.filter(
          (appointment) => appointment.providerId === provider.id,
        );
        const remaining = load.filter(
          (appointment) =>
            appointment.status === "scheduled" ||
            appointment.status === "checked-in" ||
            appointment.status === "in-room",
        ).length;

        return (
          <article className="panel" key={provider.id} style={{ padding: "1rem" }}>
            <h2>{provider.name}</h2>
            <p className="muted">
              {provider.specialty} · {provider.role.toUpperCase()}
            </p>
            <p>
              {load.length} visits today · {remaining} still open
            </p>
            <p className="muted">Rooms {provider.rooms.join(", ")}</p>
          </article>
        );
      })}
    </div>
  );
}
