import type { Patient, WaitlistEntry } from "../types";

interface WaitlistProps {
  entries: WaitlistEntry[];
  patientsById: Record<string, Patient>;
}

export function Waitlist({ entries, patientsById }: WaitlistProps) {
  if (entries.length === 0) {
    return (
      <div className="panel empty" role="status">
        The waitlist is empty for the selected day.
      </div>
    );
  }

  return (
    <aside className="panel" aria-labelledby="waitlist-heading">
      <div style={{ padding: "1rem 1rem 0" }}>
        <h2 id="waitlist-heading">Waitlist</h2>
        <p className="muted">Offer these charts if a slot opens.</p>
      </div>
      <ul>
        {entries.map((entry) => {
          const patient = patientsById[entry.patientId];
          return (
            <li key={entry.id}>
              <strong>{patient?.name ?? "Unknown patient"}</strong>
              <p className="muted">
                {entry.visitType} · {entry.requestedDate}
              </p>
              <p>{entry.reason}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
