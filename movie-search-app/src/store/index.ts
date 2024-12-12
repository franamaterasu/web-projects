import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movieSlice";

// Creamos el store con configureStore
export const store = configureStore({
  // Creamos el reduce 'movies' que representa el estado global de las películas
  reducer: {
    movies: moviesReducer,
  },
});

// Tipado del estado global
export type RootState = ReturnType<typeof store.getState>;
// Tipado del dispatcher, que se usará al despachar las acciones
export type AppDispatch = typeof store.dispatch;

export default store;
