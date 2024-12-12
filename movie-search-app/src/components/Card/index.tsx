import { IMovie } from "../../interfaces";
import "./card.scss";

interface CardProps {
  movie: IMovie;
}

const Card = ({ movie }: CardProps) => {
  return (
    <article className="card">
      <img className="card__image" src={movie.Poster} alt={movie.Title} />
      <h3 className="card__title">{movie.Title}</h3>
    </article>
  );
};

export default Card;
