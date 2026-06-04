// src/Header.jsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Header() {
  return (
    <div className="header">
      {/* Mobile Menu Icon */}
      <div id="mobilebars">
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* ONE single wrapper holding all desktop links together */}
      <div className="desktop-nav">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/radon" className="link">
          Radon
        </Link>
                <Link to="/services" className="link">
          Services
        </Link>
        <Link to="/schedule" className="link">
          Schedule
        </Link>
      </div>
    </div>
  );
}

export default Header;