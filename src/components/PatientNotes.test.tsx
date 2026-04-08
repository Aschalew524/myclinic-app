import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PatientNotes } from "./PatientNotes";

const LONG_NOTE =
  "Follow-up for hypertension and seasonal allergies. Home readings over the last two weeks range from 128/78 to 146/88, with spikes after late dinners. Continue lisinopril 10 mg daily.";

describe("Patient notes", () => {
  it("shows short notes in full without an expand control", () => {
    render(<PatientNotes note="Vaccines due." noteId="short-note" />);
    expect(screen.getByTestId("short-note-text")).toHaveTextContent(
      "Vaccines due.",
    );
    expect(
      screen.queryByRole("button", { name: "Show more" }),
    ).not.toBeInTheDocument();
  });

  it("clips long notes and offers a Show more control", () => {
    render(<PatientNotes note={LONG_NOTE} noteId="long-note" />);
    const text = screen.getByTestId("long-note-text");
    expect(text.textContent?.endsWith("…")).toBe(true);
    expect(text.textContent?.length ?? 0).toBeLessThan(LONG_NOTE.length);
    expect(screen.getByRole("button", { name: "Show more" })).toBeEnabled();
  });

  it("keeps the Show more control keyboard reachable", async () => {
    const user = userEvent.setup();
    render(<PatientNotes note={LONG_NOTE} noteId="long-note" />);
    await user.tab();
    expect(screen.getByRole("button", { name: "Show more" })).toHaveFocus();
  });
});
