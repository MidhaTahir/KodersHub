import React from "react";
import "./dashboard-page.styles.css";
// import DashboardCard from "../../components/dashboard-cards/dashboard-cards.component";
import Explorer from "../../components/explorer/explorer.component";
import { ReactComponent as DashboardBg } from "../../images/dashboard-bg.svg";
import Footer from "../../components/footer/footer.component";
import ScrollAnimation from 'react-animate-on-scroll';

const DashboardPage = () => {
  return (
    <>
      <DashboardBg />
      <div className='dashboard-page'>
        {/*
      <h1>
        This will be the dashboard from where you can select a language to work
        on!
      </h1>
      <p>TODO: Show total score</p>
      <p>TODO: Show 404 on other routes of dashboard/:language</p> 
      */}
        {/* <DashboardCard lang="html" symbol="< >" />
      <DashboardCard lang="css" symbol="{ }" />
      <DashboardCard lang="javascript" symbol="{ ; }" /> */}
        <ScrollAnimation animateIn='flipInY'>
          <Explorer />
        </ScrollAnimation>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
