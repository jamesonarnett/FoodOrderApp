import { Fragment } from "react";

import classes from "./Header.module.css";
import foodHeaderImg from "../../assets/meals.jpg";
import HeaderButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>AvgFood </h1>
        <HeaderButton onClick={props.onShowCart} />
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
