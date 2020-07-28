import React from "react";
import ExplorerFileList from "../explorer-file-list/explorer-file-list.component";
import "./explorer.styles.css";

function Explorer() {
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
      <ExplorerFileList />
    </div>
  );
}

export default Explorer;
