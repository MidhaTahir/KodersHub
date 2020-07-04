import React from "react";
import "./homepage-page.styles.css";
import { ReactComponent as Kid } from "../../images/kids_illustration.svg";

const HomePage = () => {

  function fetchData() {
    fetch("http://localhost:5000")
      .then((data) => data.text())
      .then(res => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1 className='head'>KodersGang</h1>
      <div className='textBig'>
        C&#123;&#125;deIt <br></br> & Enjoy.
      </div>
      <Kid className='kid' />
      
      {/* Test client-server connection */}
      <button onClick={fetchData}>Submit</button>
    </div>
  );
};

export default HomePage;
