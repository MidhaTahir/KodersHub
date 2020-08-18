import React from "react";
import Cubic from "../cubic/cubic.component";
import "./courses.styles.css";
import {Fade} from "react-reveal";

export default function Courses() {
  return (
    <>
      <div className='courses-title'>
      <Fade top>
          <h1>About KodersHub</h1>
      </Fade>
      </div>
      <div className='courses'>
        <div className='courses-left'>
          <p>
          We are a team of software engineering students with an aim to make our teen generation best in computer/IT skills. Teens these days spend most of their time playing video games or doing some other stuff to spend their time but if they learn development skills not only they will be able to earn through freelancing but will also be able to polish their skills and get best jobs in future InshaAllah.
          </p>
        </div>
        <div className='courses-right'>
          <Cubic />
        </div>
      </div>
    </>
  );
}
