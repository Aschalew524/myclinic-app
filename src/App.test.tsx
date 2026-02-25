import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Rivermark clinic board", () => {
  it("renders the schedule as the default view", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Daily schedule" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Elena Voss")).toBeInTheDocument();
  });

  it("moves between clinic sections from the sidebar", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Patients" }));
    expect(
      screen.getByRole("heading", { name: "Patient roster" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Staff" }));
    expect(
      screen.getByRole("heading", { name: "Staff load" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Dr. Mara Ellison")).toBeInTheDocument();
  });
});
