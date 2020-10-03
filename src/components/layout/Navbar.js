import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          <SignedInLink />
          <SignedOutLinks />
          MarioPlan
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
