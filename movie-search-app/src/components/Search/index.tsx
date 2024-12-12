import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/slices/movieSlice";
import { AppDispatch } from "../../store";
import "./search.scss";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchText.trim()) {
      dispatch(fetchMovies(searchText));
      setSearchText("");
    } else {
      alert("Inserta un nombre de película válido");
    }
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Inserta el nombre de la película"
        className="search__input"
      />
      <button type="submit" className="search__button">
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
