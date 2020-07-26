import React from "react";
import AboutCard from "../about-card/about-card";
import "./about-card-list.styles.css";

function AboutCardList() {
  const members = [
    {
      name: "Tooba",
      img: "https://via.placeholder.com/200x250.png",
      about:
        "Software Engineering Student @ NED University of Engineering & Technology.",
    },
    {
      name: "Fareena",
      img: "https://via.placeholder.com/200x250.png",
      about:
        "Software Engineering Student @ NED University of Engineering & Technology.",
    },
    {
      name: "Midha",
      img: "https://via.placeholder.com/200x250.png",
      about:
        "Software Engineering Student @ NED University of Engineering & Technology.",
    },
    {
      name: "Hasham",
      img: "https://via.placeholder.com/200x250.png",
      about:
        "Software Engineering Student @ NED University of Engineering & Technology.",
    },
  ];
  const memberCards = members.map((member, index) => {
    return <AboutCard member={member} key={index} />;
  });
  return <div className="about-card-list">{memberCards}</div>;
}

export default AboutCardList;
