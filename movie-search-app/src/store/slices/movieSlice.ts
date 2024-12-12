import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { searchMovies } from "../../api/moviesApi";

interface Movie {
  Poster: string;
  Title: string;
  Plot: string;
  imdbRating: number;
}

interface MoviesState {
  list: Movie[];
  isLoading: boolean;
  error: string | null;
}

// Creamos el estado inicial de las películas
const initialState: MoviesState = {
  list: [],
  isLoading: false,
  error: null,
};

// Acción asincrónica para la búsqueda de las películas
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (query: string, { rejectWithValue }) => {
    try {
      const data = await searchMovies(query);

      // Devolvemos las películas
      if (data.Response === "True") {
        return data.Search;
      } else {
        return rejectWithValue(data.Error);
      }
    } catch (error) {
      return rejectWithValue("Error de conexión a la API de películas");
    }
  }
);

// Creamos el slice de las películas, que contendrá una porción del estado global
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.list = [];
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.isLoading = false;
          state.list = action.payload; // Actualiza la lista de películas
        }
      )
      .addCase(fetchMovies.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload; // Guarda el mensaje de error
      });
  },
});

export default moviesSlice.reducer;
