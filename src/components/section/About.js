import React from "react";
import './About.css'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-5 p-25">
            <h3>About Us</h3>
            <h1>Welcome to our shop</h1>
            <p>
              This shop created by Vanya Goudz.I'm react developer.I build this
              shop to sell good shoes for a less price.In the future i will sell
              not only nike products, also adidas and other big and cool
              brands.All shoes is coming from original nike shop, which located
              in US.
            </p>
            <div className="about__btn">
                <a href="" className="btn btn-smart">
                    READ MORE
                </a>
            </div>
          </div>
          <div className="col-5">
            <div className="about__img">
                <img src="https://i.pinimg.com/originals/37/24/c5/3724c524ab5c0613192abaeac6b02698.png" alt="Nike"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
