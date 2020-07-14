import React from "react";
import "./homepage-page.styles.css";
import InfoGraphic from "../../components/infographic/Infographic";
import { ReactComponent as Kid } from "../../images/kids_illustration.svg";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="homeBody">
        <div className="textBig">
          <h1 className="head">KodersGang</h1>
          <p>
            C&#123;&#125;deIt <br></br> & Enjoy.
          </p>
        </div>
        <Kid className="kid" />
      </div>
      <InfoGraphic />
    </React.Fragment>
  );
};

export default HomePage;
