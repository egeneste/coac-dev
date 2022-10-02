import React from 'react';
import { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './navbar.style.css';

const index = () => {
  const [isMobile, setIsMobile] = useState(false);

  const nav_menu_items = isMobile
    ? 'nav-menu__items show-nav'
    : 'nav-menu__items';

  const handleHamburger = () => {
    setIsMobile(!isMobile);
  };
  return (
    <header>
      <div className="container">
        <NavLink to="/" className="logo">
          <img src="./logo-only.jpeg" alt="" />
        </NavLink>

        <nav className="nav-menu">
          <div className={nav_menu_items}>
            <NavLink
              onClick={() => setIsMobile(false)}
              to="/"
              className="nav_link"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsMobile(false)}
              to="/products"
              className="nav_link"
            >
              Services
            </NavLink>
            <NavLink
              onClick={() => setIsMobile(false)}
              to="/contact"
              className="nav_link"
            >
              Contact
            </NavLink>
          </div>

          <button className="hamburger" onClick={handleHamburger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="btn-open"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default index;
