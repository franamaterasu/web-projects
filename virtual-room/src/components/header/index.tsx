import { FaAngleLeft, FaRegUser } from "react-icons/fa";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__info">
      <button className="header__back">
        <FaAngleLeft />
      </button>
      <h5 className="header__title">Project Reporting - Week 1<span className="header__subtitle">Mia's Meeting Room</span></h5>
      </div>
      <div className="header__notice">
        <div className="header__notice__info">
        <FaRegUser className="header__notice-icon"/>
        <p className="header__notice-text">
          <span className="header__notice-name">Sterward Ron</span> want to join meeting
        </p>
        </div>
      </div>
    </header>
  )
}

export default Header;
