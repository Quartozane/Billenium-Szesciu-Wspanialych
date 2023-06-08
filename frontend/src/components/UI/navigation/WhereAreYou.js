import house from "../../../images/house.svg";
import styles from "./WhereAreYou.module.css";
import { Link } from "react-router-dom";
import { React, Children } from "react";

const WhereAreYou = (props) => {
  const arr = Children.toArray(props.children);
  let subpages = [];

  for (let index = 0; index < arr.length; index++) {
    subpages.push(" > ");
    subpages.push(arr[index]);
  }
  

  return (
    <div className={styles["where-are-you"]}>
      <Link to={props.mainPageLink}><img src={house} alt="house" /></Link>
      <Link to={props.mainPageLink}>Strona główna</Link>
      {subpages}
    </div>
  );
};

export default WhereAreYou;
