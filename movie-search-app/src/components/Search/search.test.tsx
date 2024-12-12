import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "../../store/slices/movieSlice";
import { useDispatch } from "react-redux";
import SearchForm from ".";

// Mock de useDispatch
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

(useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

const store = configureStore({
  reducer: {
    movies: MoviesReducer,
  },
});

describe("SearchForm Component", () => {
  test("should render input and button", () => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(
      "Inserta el nombre de la película"
    );

    const buttonElement = screen.getByRole("button", { name: "Buscar" });

    // @ts-ignore
    expect(inputElement).toBeInTheDocument();

    // @ts-ignore
    expect(buttonElement).toBeInTheDocument();
  });

  test("should update input value when typing", () => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(
      "Inserta el nombre de la película"
    );

    fireEvent.change(inputElement, { target: { value: "Inception" } });

    // @ts-ignore
    expect(inputElement).toHaveValue("Inception");
  });

  test("should alert when input is empty", () => {
    const mockAlert = jest.spyOn(window, "alert").mockImplementation();

    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(
      "Inserta el nombre de la película"
    );

    const buttonElement = screen.getByRole("button", { name: "Buscar" });

    fireEvent.change(inputElement, { target: { value: "" } });

    fireEvent.click(buttonElement);

    expect(mockAlert).toHaveBeenCalledWith(
      "Inserta un nombre de película válido"
    );
  });
});
