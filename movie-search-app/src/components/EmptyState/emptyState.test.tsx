import { render, screen } from "@testing-library/react";
import EmptyState from ".";

describe("EmptyState Component", () => {
  test("should render EmptyState with correct text", () => {
    render(<EmptyState />);

    const titleElement = screen.getByText("No hay películas para mostrar");

    const textElement = screen.getByText(
      "Intenta realizar una búsqueda o espera a que se carguen los resultados."
    );

    // @ts-ignore
    expect(titleElement).toBeInTheDocument();

    // @ts-ignore
    expect(textElement).toBeInTheDocument();
  });
});
