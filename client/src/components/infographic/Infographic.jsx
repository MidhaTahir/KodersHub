import React from "react";
import "./Infographic.css";
import CandyBar from "./../../images/bar.png";
// import Bar from "./../../images/info.svg";

export default function Infographic() {
  return (
    <div className="infographic">
      {/* <img src={CandyBar} alt="candies" className="clip-image" /> */}
      <div className="clip-box clip-html">
        <h4>HTML</h4>
      </div>
      <div className="clip-box clip-css">
        <h4>CSS</h4>
      </div>
      <div className="clip-box clip-js">
        <h4>JS</h4>
      </div>
    </div>
  );
}
