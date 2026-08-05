import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterBar } from "./FilterBar";
import { providers } from "../data/seed";

describe("Filter bar", () => {
  it("announces the selected day and provider control", async () => {
    const user = userEvent.setup();
    const onProviderChange = vi.fn();

    render(
      <FilterBar
        providerId="all"
        onProviderChange={onProviderChange}
        providers={providers}
        dateLabel="Monday, August 17, 2026"
        onPreviousDay={() => undefined}
        onNextDay={() => undefined}
        onToday={() => undefined}
      />,
    );

    expect(screen.getByText("Monday, August 17, 2026")).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText("Provider"), "prov-cho");
    expect(onProviderChange).toHaveBeenCalledWith("prov-cho");
  });
});
