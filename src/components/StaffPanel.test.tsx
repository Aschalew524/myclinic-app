import { render, screen } from "@testing-library/react";
import { StaffPanel } from "./StaffPanel";
import { appointments, CLINIC_TODAY, providers } from "../data/seed";

describe("Staff panel", () => {
  it("summarizes each provider's visit load for the day", () => {
    const today = appointments.filter(
      (appointment) => appointment.date === CLINIC_TODAY,
    );
    render(<StaffPanel providers={providers} appointments={today} />);
    expect(screen.getByText("Dr. Mara Ellison")).toBeInTheDocument();
    expect(screen.getAllByText(/Family medicine/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/visits today/).length).toBeGreaterThan(0);
  });
});
