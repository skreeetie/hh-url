import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { Skills } from "./Skills";
import { render } from "../../test/render";
import { userEvent } from "@testing-library/user-event";

describe("skills list", () => {
  it("skills list should be correctly rendered", () => {
    render(<Skills />);
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
  });
  it("input should add skill to list", async () => {
    render(<Skills />);
    expect(screen.queryByText(/Vue/)).not.toBeInTheDocument();
    await userEvent.type(screen.getByRole("textbox"), "Vue");
    await userEvent.click(screen.getByTestId("add"));
    expect(screen.getByText(/Vue/)).toBeInTheDocument();
  });
  it("input should add skill to list by pressing enter key", async () => {
    render(<Skills />);
    expect(screen.queryByText(/Next/)).not.toBeInTheDocument();
    await userEvent.type(screen.getByRole("textbox"), "Next{enter}");
    expect(screen.getByText(/Next/)).toBeInTheDocument();
  });
  it("click on cross icon should remove skill from list", async () => {
    render(<Skills />);
    expect(screen.getByText(/React/)).toBeInTheDocument();
    await userEvent.click(screen.getAllByTestId("remove")[1]);
    expect(screen.queryByText(/React/)).not.toBeInTheDocument();
  });
});
