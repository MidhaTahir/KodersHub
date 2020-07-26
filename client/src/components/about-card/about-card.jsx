import React from "react";
import "./about-card.styles.css";

function AboutCard({ member }) {
  return (
    <div className="about-card">
      <div className="about-card-hover">{member.about}</div>
      <img
        src={member.img}
        alt={member.name + "-mem"}
        className="about-card-image"
      />
      <p className="about-card-text">{member.name}</p>
    </div>
  );
}

export default AboutCard;
