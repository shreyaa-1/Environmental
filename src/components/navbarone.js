import React from "react";
import "../css/navbarone.css";
import  Logo  from "../images/logo.png";
import { Link } from 'react-router-dom';

function UncontrolledExample() {
    return (
        <div>
            <header class="header">
  <a href="" class="logo"><img src={Logo} style={{width:"4rem", height:"4rem"}}/></a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li class="line"><a href="#home">Home</a></li>
    <li class="line"><a href="#gallery">Gallery</a></li>
    <li class="line"><a href="#team">About Us</a></li>
    <li class="line"><a href="#footer">Contact</a></li>
  </ul>
</header>
        </div>


    )};

    export default UncontrolledExample;
    