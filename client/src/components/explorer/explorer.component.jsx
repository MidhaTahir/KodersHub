import React, { useState, useEffect } from "react";
import "./explorer.styles.css";

function Explorer({ children }) {

  const [username, setUsername] = useState("") 

  useEffect(() => {
    fetch("/user")
      .then(data => data.json())
      .then(data => setUsername(data.user.username))
      .catch(console.log)
  }, [username])

  return (
    <div className="explorer">
      <div className="explorer-title">
        <div className="explorer-btns">
          <div className="explorer-btn explorer-btn-red"></div>
          <div className="explorer-btn explorer-btn-yellow"></div>
          <div className="explorer-btn explorer-btn-green"></div>
        </div>
        <div className="userName">{username && username.toUpperCase()}</div>
      </div>
      {children}
    </div>
  );
}

export default Explorer;
