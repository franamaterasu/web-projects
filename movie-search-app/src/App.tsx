import { useSelector } from "react-redux";
import { RootState } from "./store";
import Header from "./components/Header";
import SearchForm from "./components/Search";
import List from "./components/List";
import EmptyState from "./components/EmptyState";

function App() {
  const movies = useSelector((state: RootState) => state.movies.list);
  return (
    <>
      <Header />
      <SearchForm />
      {movies.length === 0 ? <EmptyState /> : <List movies={movies} />}
    </>
  );
}

export default App;
