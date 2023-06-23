import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const welcomeMessage = "Star Wars Fan Page";

  return (
    <header>
      <nav className="navigation">
        <h3 style={{ color: "white" }}>{welcomeMessage}</h3>
        <ul className="navlinks">
          <NavLink to="/" className="link">
            <li>Home</li>
          </NavLink>

          <Link to="/people" className="link">
            <li>People</li>
          </Link>

          <Link to="/planets" className="link">
            <li>Planets</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
