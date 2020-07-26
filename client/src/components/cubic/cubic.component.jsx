import React from "react";
import Cube from "react-3d-cube";
import "./cubic.styles.css";
import back from "../../images/back.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import sass from "../../images/sass.png";

function Cubic() {
  return (
    <div className="cubic">
      <div
        style={{
          width: 250,
          height: 250,
        }}
      >
        <Cube size={250} index="front">
          <img src={html} alt="front" />
          <img src={css} alt="right" />
          <img src={js} alt="back" />
          <img src={sass} alt="left" />
          <img src={back} alt="top" />
          <img src={back} alt="bottom" />
        </Cube>
      </div>
    </div>
  );
}

export default Cubic;
