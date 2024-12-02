import "./posters.scss";

const Posters = () => {
  return (
    <section className="posters">
      <div className="poster poster--one">
        <img
          className="poster__image"
          src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQDpDWVsSOKe-1vxGFp0LVWRod_HTSZD_Uzqygs8HArkHdZ_26EeQPzV7ImZCi2RiX6-iJ07H8aU6OuUjibYnEhVw6T6J9IddLaZ.jpg?r=71d"
        />
        <h4 className="poster__name">La maldicion de Bly Manor</h4>
      </div>
      <div className="poster poster--two">
        <img
          className="poster__image"
          src="https://media.vandalsports.com/master/10-2023/20231023113817_1.jpg"
          alt=""
        />
        <h4 className="poster__name">La caida de la casa Usher</h4>
      </div>
      <div className="poster poster--three">
        <img
          className="poster__image"
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/misa-medianoche-2481861.jpg?tf=3840x"
        />
        <h4 className="poster__name">Misa de media noche</h4>
      </div>
    </section>
  );
};

export default Posters;
