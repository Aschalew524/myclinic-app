import { useMemo, useState } from "react";
import {
  appointments,
  CLINIC_TODAY,
  formatDisplayDate,
  patients,
  providers,
  shiftDate,
  waitlist,
} from "../data/seed";
import type { Patient, Provider } from "../types";

export function useClinicDay(initialDate = CLINIC_TODAY) {
  const [date, setDate] = useState(initialDate);
  const [providerId, setProviderId] = useState("all");

  const patientsById = useMemo(() => {
    return Object.fromEntries(patients.map((patient) => [patient.id, patient])) as Record<
      string,
      Patient
    >;
  }, []);

  const providersById = useMemo(() => {
    return Object.fromEntries(
      providers.map((provider) => [provider.id, provider]),
    ) as Record<string, Provider>;
  }, []);

  const dayAppointments = useMemo(() => {
    return appointments
      .filter((appointment) => appointment.date === date)
      .filter((appointment) =>
        providerId === "all" ? true : appointment.providerId === providerId,
      )
      .slice()
      .sort((left, right) => left.startTime.localeCompare(right.startTime));
  }, [date, providerId]);

  const dayWaitlist = useMemo(() => {
    return waitlist.filter((entry) => entry.requestedDate === date);
  }, [date]);

  return {
    date,
    dateLabel: formatDisplayDate(date),
    providerId,
    setProviderId,
    patients,
    providers,
    patientsById,
    providersById,
    dayAppointments,
    dayWaitlist,
    goToday: () => setDate(CLINIC_TODAY),
    goPreviousDay: () => setDate((current) => shiftDate(current, -1)),
    goNextDay: () => setDate((current) => shiftDate(current, 1)),
  };
}
