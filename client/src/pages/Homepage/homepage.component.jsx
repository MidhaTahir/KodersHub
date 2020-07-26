import React from "react";
import "./homepage-page.styles.css";
import InfoGraphic from "../../components/infographic/Infographic";
import { ReactComponent as Kids } from "../../images/girl-boy.svg";
import AboutCardList from "../../components/about-card-list/about-card-list";

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
        <Kids className="kid" />
      </div>

      <AboutCardList />
      {/* <InfoGraphic /> */}
    </React.Fragment>
  );
};

export default HomePage;
