import React from "react";
import Foto1 from "../img/1.png";
import Social from "../img/icons.svg";
import classes from "./FotoOne.module.css";
function FotoSocial() {
  return (
    <div>
      <img src={Foto1} alt="" className={classes.foto} />
      <img src={Social} alt="" className={classes.social} />
    </div>
  );
}
export default FotoSocial;
