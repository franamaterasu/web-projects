import { IMovie } from "../../interfaces";
import Card from "../Card";
import "./list.scss";

interface ListProps {
  movies: IMovie[];
}

const List = ({ movies }: ListProps) => {
  return (
    <ul className="list">
      {movies.map((movie, index) => (
        <Card movie={movie} key={`${movie.Title}-${index}`} />
      ))}
    </ul>
  );
};

export default List;
