import React from "react";
import "./about-card-list.styles.css";
import AboutCard from "./../about-card/about-card.jsx";

const AboutCardList = (props) => {
  const members = [
    'Tooba', 'Midha', 'Fareena', 'Hasham'
  ];

  const AboutCards = members.forEach((member, index) => <AboutCard key={index} member={member} />);

  return (
    <React.Fragment>
      <div className="about-card-list">
        {AboutCards}
      </div>
    </React.Fragment>
  );
};

export default AboutCard;
