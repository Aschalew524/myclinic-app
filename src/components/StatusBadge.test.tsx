import { render, screen } from "@testing-library/react";
import { StatusBadge } from "./StatusBadge";

describe("Status badge", () => {
  it("includes a text label so status is not color-only", () => {
    render(<StatusBadge status="checked-in" />);
    expect(screen.getByText("Checked in")).toBeInTheDocument();
    expect(screen.getByText("Status:")).toBeInTheDocument();
  });
});
