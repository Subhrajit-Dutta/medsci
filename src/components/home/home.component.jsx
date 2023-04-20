import React from "react";
import "./home.styles.scss";
import HomePic from "../../assets/medpic.png";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="intro">
        <p className="intro-1">Welcome To our <br /> Healthcare platform!</p>
        <p className="intro-2">
          Connect with licensed doctors for trusted medical consultations and
          personalized support. Our user-friendly interface ensures seamless
          communication and privacy. Get access to quality healthcare from the
          comfort of your home or on-the-go.
        </p>
      </div>
      <img src={HomePic} alt="home-pic" />
    </div>
  );
};

export default Home;
