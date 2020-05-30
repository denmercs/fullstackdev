import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="">Login with Google</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
