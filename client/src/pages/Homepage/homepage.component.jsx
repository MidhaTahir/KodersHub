import React from "react";
import "./homepage-page.styles.css";
import { ReactComponent as Kid } from "../../images/kids_illustration.svg";

const HomePage = () => {
  return (
    <div className='homeBody'>
      <div className='textBig'>
        <h1 className='head'>KodersGang</h1>
        <p>
          C&#123;&#125;deIt <br></br> <small>&</small> Enjoy.
        </p>
      </div>
      <Kid className='kid' />
    </div>
  );
};

export default HomePage;
