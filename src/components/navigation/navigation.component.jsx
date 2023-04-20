import React from 'react';
import "./navigation.styles.scss";
import { Routes, Route } from 'react-router-dom';
import Logo from "../../assets/logo.png"
import Button from '../buttons/nav-button/button.component';

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='logo-container'>
            <img src={Logo} alt="web-logo" />
        </div>
        <div className='nav-wrapper'>
        <div className='nav-menu'>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </div>
        <Button className='button-container' type='submit'>SIGN IN</Button>
        </div>
    </div>
  )
}

export default Navigation;