import React from "react";
import "./explorer.styles.css";

function Explorer({ username, children }) {
  return (
    <div className="explorer">
      <div className="explorer-title">
        <div className="explorer-btns">
          <div className="explorer-btn explorer-btn-red"></div>
          <div className="explorer-btn explorer-btn-yellow"></div>
          <div className="explorer-btn explorer-btn-green"></div>
        </div>
        <div className="userName">{username.toUpperCase()}</div>
      </div>
      {children}
    </div>
  );
}

export default Explorer;
