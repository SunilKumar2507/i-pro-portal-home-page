import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="container">
      <header className="header-container">
        {/* Logo */}
        <div className="logo" >Logo</div>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={() => setOpenMenu(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${openMenu ? "open" : ""}`}>
          {isMobile && (
            <div className="close-icon" onClick={() => setOpenMenu(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          )}
          <ul className="navbar-list">
            <li className="nav-items">
              <NavLink to="/" className="navbar-link" onClick={() => setOpenMenu(false)}>Home</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/our-services" className="navbar-link" onClick={() => setOpenMenu(false)}>Our Services</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/about-us" className="navbar-link" onClick={() => setOpenMenu(false)}>
                About Us
              </NavLink>
            </li>

            <li className="nav-items">
              <NavLink to="/contact-us" className="navbar-link" onClick={() => setOpenMenu(false)}>Support</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
