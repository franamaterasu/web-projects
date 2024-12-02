import PropTypes from "prop-types";
import { GiPlayButton } from "react-icons/gi";
import "./card.scss";

const Card = ({ info }) => {
  const { titulo, imagen, descripcion } = info;
  return (
    <article className="card">
      <div className="card__picture">
        <img className="card__image" src={imagen} alt={titulo} />
        <GiPlayButton className="card__icon" />
      </div>
      <h5 className="card__title">{titulo}</h5>
      <p className="card__description">{descripcion}</p>
    </article>
  );
};

Card.propTypes = {
  info: PropTypes.shape({
    titulo: PropTypes.string,
    imagen: PropTypes.string,
    descripcion: PropTypes.string,
  }).isRequired,
};

export default Card;
