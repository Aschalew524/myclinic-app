import { render, screen } from "@testing-library/react";
import { Waitlist } from "./Waitlist";
import { patients, waitlist } from "../data/seed";
import type { Patient } from "../types";

const patientsById = Object.fromEntries(
  patients.map((patient) => [patient.id, patient]),
) as Record<string, Patient>;

describe("Waitlist", () => {
  it("lists patients who want an earlier slot", () => {
    render(<Waitlist entries={waitlist} patientsById={patientsById} />);
    expect(screen.getByText("Lila Nguyen")).toBeInTheDocument();
    expect(screen.getByText("Jonah Reeve")).toBeInTheDocument();
  });

  it("announces an empty waitlist", () => {
    render(<Waitlist entries={[]} patientsById={patientsById} />);
    expect(
      screen.getByText("The waitlist is empty for the selected day."),
    ).toBeInTheDocument();
  });
});
