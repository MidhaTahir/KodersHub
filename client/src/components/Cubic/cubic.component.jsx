import React from "react";
import Cube from "react-3d-cube";
import "./cubic.styles.css";

function Cubic() {
  return (
    <div className="cubic">
      <div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <Cube size={300} index="front">
          <img src={"https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png"} alt="front"/>
          <img src={"https://cdn.iconscout.com/icon/free/png-512/css3-8-1175200.png"} alt="right" />
          <img src={"https://w0.pngwave.com/png/780/695/javascript-comment-html-logo-international-conference-on-missions-node-js-icon-png-clip-art.png"} alt="back" />
          <img src={"https://assets.algoexpert.io/ge96066f5c7-prod/dist/images/pythonLogo.png?4f9d7b95"} alt="left" />
          <img src={"https://www.transparenttextures.com/patterns/asfalt-light.png"} alt="top" />
          <img src={"https://www.transparenttextures.com/patterns/asfalt-light.png"} alt="bottom" />
        </Cube>
      </div>
    </div>
  );
}

export default Cubic;
