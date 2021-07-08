import { Link } from "react-router-dom";
import './ShopNavigation.css';

function ShopNavigation() {
  return (
    <nav>
      <ul className="shopMenu">
        <Link className="link" to="/category/Mens" className="Link">
          MENS
        </Link>
        <Link to="/category/Womens" className="Link">
          WOMENS
        </Link>
        <Link to="/category/Electronic" className="Link">
          ELECTRONIC
        </Link>
      </ul>
    </nav>
  );
}

export default ShopNavigation;