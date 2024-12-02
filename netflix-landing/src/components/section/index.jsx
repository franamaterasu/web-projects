import PropTypes from "prop-types";
import "./section.scss";

const Section = ({ children, title }) => {
  return (
    <section className="section">
      <h4 className="section__title">{title}</h4>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Section;
