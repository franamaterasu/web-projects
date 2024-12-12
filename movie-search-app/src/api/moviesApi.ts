import axios from "axios";

const API_KEY = "729628d9";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        // Parámetro de la búsqueda
        s: query,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error en la búsqueda de películas");
  }
};
