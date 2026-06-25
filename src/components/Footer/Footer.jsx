import { NavLink } from "react-router-dom";

import "./Footer.css";
import Vector from "../../images/Vector.png";
import Union from "../../images/Union.png";

function Footer() {
  return (
    <div className="footer__content">
      <div className="footer__copyright">
        {" "}
        @ 2026 Supersite, Powered by News API{" "}
      </div>
      <div className="footer__buttons">
        <NavLink to="/">
          <button className="footer__link"> Home </button>
        </NavLink>
        <button className="footer__link">TripleTen</button>
        <img src={Vector} alt="Github" className="footer__github" />
        <img src={Union} alt="LinkedIn" className="footer__linkedin" />
      </div>
    </div>
  );
}

export default Footer;
