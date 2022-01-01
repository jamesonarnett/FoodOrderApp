import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Header.module.css";
import foodHeaderImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>McJamBurger</h1>
        <button>Cart</button>
      </header>
      <div>
        <img
          className={classes.mainImage}
          alt="table covered in delicious looking foods"
          src={foodHeaderImg}
        />
      </div>
    </Fragment>
  );
};

export default Header;
