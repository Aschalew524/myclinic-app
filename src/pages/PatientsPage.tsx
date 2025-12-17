import { PatientRoster } from "../components/PatientRoster";
import { patients } from "../data/seed";

export function PatientsPage() {
  return (
    <section>
      <header className="page-header">
        <div>
          <h1>Patient roster</h1>
          <p>
            Search the chart list, filter by status, and select rows for reminder
            work.
          </p>
        </div>
      </header>
      <PatientRoster patients={patients} />
    </section>
  );
}
