import React, { Fragment } from "react";
import "./navigation.styles.scss";
import Logo from "../../assets/logo.png";
import Button from "../buttons/nav-button/button.component";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="web-logo" />
          </Link>
        </div>
        <div className="nav-wrapper">
          <div className="nav-menu">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </div>
            <Button className="button-container" type="submit">
              <Link to = "/auth">
              SIGN IN 
              </Link>
            </Button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
