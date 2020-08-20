import React, { useState, useEffect, useContext } from "react";
import "./explorer.styles.css";
// import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import UserContext from "../../context/userContext";
// import Zoom from 'react-reveal/Zoom';

function Explorer({ children }) {

  // const [username, setUsername] = useState("") 

  // useEffect(() => {
  //   fetch("/user")
  //     .then(data => data.json())
  //     .then(data => setUsername(data.user.username))
  //     .catch(console.log)
  // }, [username])

  const { user } = useContext(UserContext);
  const username = user.username;

  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="explorer">
      <div className="explorer-title">
        <div className="explorer-btns">
          <div className="explorer-btn explorer-btn-red"></div>
          <div className="explorer-btn explorer-btn-yellow"></div>
          <div className="explorer-btn explorer-btn-green"></div>
        </div>
        <div className="userName">{username && username.toUpperCase()}<span role="img" aria-label="laptop">💻</span></div>  
      </div> 
      {children}
    </div>
    </Fade>
  );
}

export default Explorer;
