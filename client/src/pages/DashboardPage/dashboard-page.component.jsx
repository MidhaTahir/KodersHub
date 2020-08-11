import React, { useContext } from "react";
import { Redirect } from "react-router-dom"
import "./dashboard-page.styles.css";
import Explorer from "../../components/explorer/explorer.component";
import { ReactComponent as DashboardBg } from "../../images/dashboard-bg.svg";
import Footer from "../../components/footer/footer.component";
import ScrollAnimation from 'react-animate-on-scroll';
import ExplorerFileList from "../../components/explorer-file-list/explorer-file-list.component"
import UserContext from "../../context/userContext"
import _ from 'lodash';

const DashboardPage = () => {

  const [user, ] = useContext(UserContext);

  if (_.isEmpty(user)) {
    // if user is not logged in then he has to login first then he can open the dashboard
    return <Redirect to={"/signin"} />
  } else {
    return (
      <>
        <DashboardBg />
        <div className='dashboard-page'>
          {/* TODO: Show total score */}
          <ScrollAnimation animateIn='flipInY'>
            <Explorer username={user}>
              <ExplorerFileList />
            </Explorer>
          </ScrollAnimation>
        </div>
        <Footer />
      </>
    );
  }
};

export default DashboardPage;
