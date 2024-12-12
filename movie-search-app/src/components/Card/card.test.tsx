import { render, screen } from "@testing-library/react";
import Card from ".";
import { IMovie } from "../../interfaces";

const mockMovie: IMovie = {
  Title: "Inception",
  Poster: "https://example.com/inception.jpg",
};

describe("Card Component", () => {
  test("should render card with movie details", () => {
    render(<Card movie={mockMovie} />);

    const titleElement = screen.getByText(mockMovie.Title);

    const imageElement = screen.getByRole("img");

    // @ts-ignore
    expect(titleElement).toBeInTheDocument();

    // @ts-ignore
    expect(imageElement).toHaveAttribute("src", mockMovie.Poster);
  });
});
