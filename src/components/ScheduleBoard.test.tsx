import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SchedulePage } from "../pages/SchedulePage";

describe("Schedule board", () => {
  it("groups today's visits and shows waitlist entries for the clinic day", () => {
    render(<SchedulePage />);
    expect(screen.getByText("Elena Voss")).toBeInTheDocument();
    expect(screen.getByText("Marisol Vega")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Waitlist" })).toBeInTheDocument();
    expect(
      screen.getByText(/Same-day slot for inhaler refill/i),
    ).toBeInTheDocument();
  });

  it("filters the board by provider", async () => {
    const user = userEvent.setup();
    render(<SchedulePage />);

    await user.selectOptions(
      screen.getByLabelText("Provider"),
      "Dr. Julian Cho",
    );

    expect(screen.getByText("Noah Calder")).toBeInTheDocument();
    expect(screen.queryByText("Elena Voss")).not.toBeInTheDocument();
  });

  it("shows an empty state when the selected day has no visits", async () => {
    const user = userEvent.setup();
    render(<SchedulePage />);

    await user.click(screen.getByRole("button", { name: "Next day" }));
    await user.click(screen.getByRole("button", { name: "Next day" }));

    expect(
      screen.getByText(
        "No visits are on the board for this day and provider filter.",
      ),
    ).toBeInTheDocument();
  });

  it("opens a visit drawer from an appointment card", async () => {
    const user = userEvent.setup();
    render(<SchedulePage />);

    await user.click(
      screen.getByRole("button", { name: /Open visit for Elena Voss/i }),
    );

    expect(screen.getByRole("dialog", { name: "Elena Voss" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close visit" })).toHaveFocus();
  });
});
