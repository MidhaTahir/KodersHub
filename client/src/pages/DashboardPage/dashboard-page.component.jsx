import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./dashboard-page.styles.css";
import Explorer from "../../components/explorer/explorer.component";
import { ReactComponent as DashboardBg } from "../../images/dashboard-bg.svg";
import Footer from "../../components/footer/footer.component";
import ScrollAnimation from "react-animate-on-scroll";
import ExplorerFileList from "../../components/explorer-file-list/explorer-file-list.component";
import UserContext from "../../context/userContext";
import { isEmpty } from "lodash";

const DashboardPage = (props) => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    
    async function fetchUser() {
      const data = await fetch("/user", { credentials: 'include' })
      const dataJson = await data.json();
      setUser(!isEmpty(dataJson.user));
      if(isEmpty(dataJson.user)) props.history.push("/signUp");
    }

    fetchUser();
  })

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
};

export default DashboardPage;
