import React from "react";
import Cubic from "../cubic/cubic.component";
import "./courses.styles.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function Courses() {
  return (
    <>
      <div className='courses-title'>
        <ScrollAnimation animateIn='fadeIn'>
          <h1>Our Courses</h1>
        </ScrollAnimation>
      </div>
      <div className='courses'>
        <div className='courses-left'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            itaque esse nesciunt beatae ipsa, quam laudantium doloribus quia,
            ipsam nemo, quis dolore voluptates enim harum magnam labore optio
            ex. Laboriosam repudiandae labore ipsam facilis aperiam laudantium,
            rerum voluptatem cumque sapiente blanditiis! Natus, odio deserunt
            iste veritatis quos nihil voluptatum explicabo.
          </p>
        </div>
        <div className='courses-right'>
          <Cubic />
        </div>
      </div>
    </>
  );
}
