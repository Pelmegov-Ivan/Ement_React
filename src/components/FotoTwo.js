import React from "react";
import foto2 from "../img/2.png";
import Down from "../img/down.svg";
import classes from "./FotoTwo.module.css";
function Foto2() {
  return (
    <div>
      <img src={foto2} alt="" className={classes.foto} />
      <div className={classes.scroll}>
        <span className={classes.scroll_down}>Листайте вниз</span>
        <img src={Down} alt="" className={classes.down} />
      </div>
    </div>
  );
}
export default Foto2;
