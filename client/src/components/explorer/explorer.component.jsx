import React from "react";
import "./explorer.styles.css";

function Explorer(props) {
  return (
    <div className="explorer">
      <div className="explorer-title">
        <div className="explorer-btns">
          <div className="explorer-btn explorer-btn-red"></div>
          <div className="explorer-btn explorer-btn-yellow"></div>
          <div className="explorer-btn explorer-btn-green"></div>
        </div>
        <div className="userName">JOHN DOE</div>
      </div>
      {props.children}
    </div>
  );
}

export default Explorer;
