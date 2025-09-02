import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { VacanciesList } from "./VacanciesList";
import { render } from "../../test/render";

describe("vacancies list", () => {
  it("list should be correctly rendered", async () => {
    render(<VacanciesList />);
    const fetchText = await screen.findAllByText(/Опыт/);
    expect(fetchText[0]).toBeInTheDocument();
  });
});
