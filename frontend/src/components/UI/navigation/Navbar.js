import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../../images/logo.png";
import Hamburger from "./Hamburger";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import hamburgerClasses from "./Hamburger.module.css";

const HamburgerButton = (props) => {
  const { showSidebar, toggleSidebar } = props;
  return (
    <>
      <button
        onClick={toggleSidebar}
        className={hamburgerClasses["hamburger-button"]}
        type="button"
      >
        <FaIcons.FaBars className={hamburgerClasses["hamburger-button-icon"]} />
        <span className={hamburgerClasses["visually-hidden"]}>Menu</span>
      </button>

      <Hamburger showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li style={{ width: "fit-content" }}>
            <img
              alt="Logo systemu zarządzania zadaniami w gospodarstwie rolnym"
              src={logo}
            />
          </li>
          <li>
            <p>Przychodnia studencka "Wielkie Serce"</p>
          </li>
        </ul>
      </nav>
      <HamburgerButton
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
      />
    </header>
  );
};

export default Navbar;
