import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { Area } from "./Area";
import { render } from "../../test/render";
import "@testing-library/jest-dom";

describe("area select", () => {
  it("select should be correctly rendered", () => {
    render(<Area />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
