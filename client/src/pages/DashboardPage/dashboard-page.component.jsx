import React, { useContext, useEffect } from "react";
import { Redirect } from 'react-router';
import "./dashboard-page.styles.css";
import Explorer from "../../components/explorer/explorer.component";
import { ReactComponent as DashboardBg } from "../../images/dashboard-bg.svg";
import Footer from "../../components/footer/footer.component";
import ScrollAnimation from "react-animate-on-scroll";
import ExplorerFileList from "../../components/explorer-file-list/explorer-file-list.component";
import UserContext from "../../context/userContext";

const DashboardPage = (props) => {
  const { user } = useContext(UserContext);

  if (user.loggedIn) {
    return (
      <>
        <DashboardBg />
        <div className='dashboard-page'>
          {/* TODO: Show total score */}
          <ScrollAnimation animateIn='flipInY'>
            <Explorer>
              <ExplorerFileList />
            </Explorer>
          </ScrollAnimation>
        </div>
        <Footer />
      </>
    );  
  } else {
    return <Redirect to={"/signin"} />;
  }
};

export default DashboardPage;
