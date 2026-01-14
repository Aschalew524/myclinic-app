import { StaffPanel } from "../components/StaffPanel";
import { appointments, CLINIC_TODAY, providers } from "../data/seed";

export function StaffPage() {
  const todayAppointments = appointments.filter(
    (appointment) => appointment.date === CLINIC_TODAY,
  );

  return (
    <section>
      <header className="page-header">
        <div>
          <h1>Staff load</h1>
          <p>Today’s visit counts by provider, including rooms still open.</p>
        </div>
      </header>
      <StaffPanel providers={providers} appointments={todayAppointments} />
    </section>
  );
}
