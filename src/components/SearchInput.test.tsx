import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from "./SearchInput";
import { useState } from "react";

function Harness() {
  const [value, setValue] = useState("");
  return (
    <SearchInput
      id="demo-search"
      label="Find a chart"
      value={value}
      onChange={setValue}
    />
  );
}

describe("Search input", () => {
  it("exposes a labelled search field and updates its value", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const field = screen.getByLabelText("Find a chart");
    await user.type(field, "RM-10482");
    expect(field).toHaveValue("RM-10482");
  });
});
