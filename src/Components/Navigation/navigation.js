import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <Link to="/" className="Link">
          Home
        </Link>
        <Link to="/Shop" className="Link">
          Shop
        </Link>
        <Link to="/About" className="Link">
          About
        </Link>
        <Link to="/Contact" className="Link">
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;