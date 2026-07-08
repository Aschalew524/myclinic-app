import { render, screen } from "@testing-library/react";
import { AppointmentCard } from "./AppointmentCard";
import { appointments, getPatient, getProvider } from "../data/seed";

describe("Appointment card", () => {
  it("shows the patient, room, and visit reason", () => {
    const appointment = appointments[0];
    const patient = getPatient(appointment!.patientId)!;
    const provider = getProvider(appointment!.providerId)!;

    render(
      <AppointmentCard
        appointment={appointment!}
        patient={patient}
        provider={provider}
        onOpen={() => undefined}
      />,
    );

    expect(
      screen.getByRole("heading", { name: patient.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Room A2/)).toBeInTheDocument();
    expect(screen.getByText("Blood pressure recheck")).toBeInTheDocument();
  });
});
