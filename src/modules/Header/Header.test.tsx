import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "./Header";
import { render } from "../../test/render";
import "@testing-library/jest-dom";

describe("header", () => {
  it("header should be correctly rendered", () => {
    render(<Header />);
    expect(screen.getByText(/Вакансии FE/)).toBeInTheDocument();
  });
});
