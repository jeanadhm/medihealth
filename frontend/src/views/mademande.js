import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUsers, faHandsHelping } from '@fortawesome/free-solid-svg-icons';


// components

import Navbar from "components/Navbars/ConNavbar";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";
import Profile from "./Profile";

export default function Mademande() {
  return (
    <>
     <Navbar transparent />
        <main>
        <Profile />
        </main>
        
        <br />
        <br />
        <Footer />
    </>
  );
}
