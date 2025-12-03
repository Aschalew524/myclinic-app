import { useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { ScheduleBoard } from "../components/ScheduleBoard";
import { Waitlist } from "../components/Waitlist";
import { AppointmentDrawer } from "../components/AppointmentDrawer";
import { useClinicDay } from "../hooks/useClinicDay";

export function SchedulePage() {
  const clinic = useClinicDay();
  const [openId, setOpenId] = useState<string | null>(null);
  const openAppointment = clinic.dayAppointments.find(
    (appointment) => appointment.id === openId,
  );

  return (
    <section>
      <header className="page-header">
        <div>
          <h1>Daily schedule</h1>
          <p>Front desk view of rooms, notes, and who still needs to be roomed.</p>
        </div>
        <p role="status">
          {clinic.dayAppointments.length} visits on the board
        </p>
      </header>
      <FilterBar
        providerId={clinic.providerId}
        onProviderChange={clinic.setProviderId}
        providers={clinic.providers}
        dateLabel={clinic.dateLabel}
        onPreviousDay={clinic.goPreviousDay}
        onNextDay={clinic.goNextDay}
        onToday={clinic.goToday}
      />
      <div className="layout-split">
        <ScheduleBoard
          appointments={clinic.dayAppointments}
          patientsById={clinic.patientsById}
          providersById={clinic.providersById}
          onOpenAppointment={setOpenId}
        />
        <Waitlist
          entries={clinic.dayWaitlist}
          patientsById={clinic.patientsById}
        />
      </div>
      {openAppointment ? (
        <AppointmentDrawer
          appointment={openAppointment}
          patient={clinic.patientsById[openAppointment.patientId]!}
          provider={clinic.providersById[openAppointment.providerId]!}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </section>
  );
}
