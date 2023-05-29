import React from "react";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import Slider from "../components/UI/modules/Slider";
import { Link, NavLink } from "react-router-dom";

import classes from "./HomePage.module.css";

const Home = () => {
  return (
    <>
      <WhereAreYou>
        {/* do zmiany childreny*/}
        <NavLink end to="/">
          Strona główna
        </NavLink>
        <NavLink end to="/">
          ...
        </NavLink>
      </WhereAreYou>
      <div className={classes["slider-wrapper"]}>
        <div className={classes["slider-desc-container"]}>
          <p className={`${classes["slider-desc"]} ${classes["main"]}`}>
            Zadbamy o
          </p>
          <p className={`${classes["slider-desc"]} ${classes["sub"]}`}>
            twoje zdrowie!
          </p>
          <Link to="#" className={classes["slider-link-button"]}>
            Sprawdź
          </Link>
        </div>
        <Slider />
      </div>
      <p className={classes.desc}>
        {/* Przychodnia "Wielkie serce" dla studentów */} 
      </p>
    </>
  );
};

export default Home;
