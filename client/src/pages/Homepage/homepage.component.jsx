import React from "react";
import "./homepage-page.styles.css";
import { ReactComponent as Kids } from "../../images/girl-boy.svg";
import AboutCardList from "../../components/about-card-list/about-card-list.component";
import Courses from "../../components/courses/courses.component";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className='homeBody'>
        <div className='textBig'>
          <h1 className='head'>KodersHub</h1>
          <p>
            C&#123;&#125;deIt <br></br> & Enjoy.
          </p>
        </div>
        <Kids className='kid' />
      </div>

      <AboutCardList />
        <Courses />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
