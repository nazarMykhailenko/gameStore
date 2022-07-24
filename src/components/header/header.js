import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          GameStore
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
}

export { Header };
