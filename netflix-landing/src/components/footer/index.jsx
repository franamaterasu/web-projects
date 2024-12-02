import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h3 className="footer__title">Company</h3>
        <ul>
          <li className="footer__item">
            <a className="footer__link" href="#">
              About Us
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Jobs
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Press
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Help</h3>
        <ul>
          <li className="footer__item">
            <a className="footer__link" href="#">
              FAQ
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Contact Support
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Account
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Legal</h3>
        <ul>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Terms of Use
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Cookies
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Connect</h3>
        <ul>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Twitter
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Facebook
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
