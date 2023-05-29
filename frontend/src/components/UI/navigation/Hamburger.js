import React from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import * as AiIcons from "react-icons/ai";
import classes from "./Hamburger.module.css";

const linki = [
  {
    title: "Strona główna",
    path: "/",
  },
  {
    title: "O nas",
    path: "/",
  },
  {
    title: "Kontakt",
    path: "/",
  },
];

const Backdrop = (props) => {
  const { toggleSidebar } = props;
  return <div onClick={toggleSidebar} className={classes.backdrop}></div>;
};

const Hamburger = (props) => {
  const { showSidebar, toggleSidebar } = props;

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`${classes["hamburger-nav"]} ${showSidebar &&
            classes["show"]}`}
        >
          <ul className={classes["hamburger-list"]}>
            {linki.map((link) => (
              <li key={link.title}>
                <NavLink className={classes.link} to={link.path}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className={`${classes["hamburger-button"]} ${classes["closing"]}`}
            onClick={toggleSidebar}
          >
            <AiIcons.AiOutlineClose
              className={classes["hamburger-button-icon"]}
            />
          </button>
        </div>,
        document.getElementById("sidebar")
      )}
      {showSidebar &&
        ReactDOM.createPortal(
          <Backdrop toggleSidebar={toggleSidebar} />,
          document.getElementById("backdrop")
        )}
    </>
  );
};

export default Hamburger;
