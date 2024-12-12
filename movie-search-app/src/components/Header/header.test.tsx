import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header Component", () => {
  test("should render header with title", () => {
    render(<Header />);

    const titleElement = screen.getByText("Buscador de películas");

    // @ts-ignore
    expect(titleElement).toBeInTheDocument();
  });
});
