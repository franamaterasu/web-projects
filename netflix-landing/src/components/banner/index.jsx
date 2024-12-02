import "./banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <section className="caption">
        <div className="caption__info">
          <h3 className="caption__title">La maldición de Hill House</h3>
          <p className="caption__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat cum
            facilis earum aperiam velit harum.
          </p>
        </div>
        <div className="caption__buttons">
          <button className="caption__button">Watch now</button>
          <button className="caption__button">Add to watch list</button>
        </div>
      </section>
    </section>
  );
};

export default Banner;
