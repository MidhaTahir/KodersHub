import React from "react";
import AboutCard from "../about-card/about-card.component";
import "./about-card-list.styles.css";
import tooba from "../../images/tooba.png";
import fareena from "../../images/fareena.png";
import midha from "../../images/midha.png";
import hasham from "../../images/hasham.png";

function AboutCardList() {
  const members = [
    {
      name: "Tooba",
      img: tooba,
      about:
        "Software Engineering Student @ NED University of Engineering & Technology.",
    },
    {
      name: "Fareena",
      img: fareena,
      about:
        "Software Engineering Student @ NED University of Engineering & Technology.",
    },
    {
      name: "Midha",
      img: midha,
      about:
        "Software Engineering Student @ NED University of Engineering & Technology.",
    },
    {
      name: "Hasham",
      img: hasham,
      about:
        "Software Engineering Student @ NED University of Engineering & Technology.",
    },
  ];
  const memberCards = members.map((member, index) => {
    return <AboutCard member={member} key={index} />;
  });
  return (
    <React.Fragment>
      <div className="about-card-list-title">
        <h1 class="">Our Team</h1>
      </div>
      <div className="about-card-list">{memberCards}</div>;
    </React.Fragment>
  );
}

export default AboutCardList;
