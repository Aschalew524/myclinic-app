import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PatientRoster } from "./PatientRoster";
import { patients } from "../data/seed";

describe("Patient roster", () => {
  it("filters patients by name and status", async () => {
    const user = userEvent.setup();
    render(<PatientRoster patients={patients} />);

    await user.type(screen.getByLabelText("Search patients"), "Voss");
    expect(screen.getByText("Elena Voss")).toBeInTheDocument();
    expect(screen.queryByText("Noah Calder")).not.toBeInTheDocument();

    await user.clear(screen.getByLabelText("Search patients"));
    await user.selectOptions(screen.getByLabelText("Chart status"), "Inactive");

    expect(screen.getByText("Owen Pratt")).toBeInTheDocument();
    expect(screen.queryByText("Elena Voss")).not.toBeInTheDocument();
  });

  it("lets staff select visible rows", async () => {
    const user = userEvent.setup();
    render(<PatientRoster patients={patients} />);

    await user.click(screen.getByLabelText("Select Elena Voss"));
    await user.click(screen.getByLabelText("Select Noah Calder"));

    expect(screen.getByText(/2 selected/)).toBeInTheDocument();
    expect(screen.getByLabelText("Select Elena Voss")).toBeChecked();
  });
});
