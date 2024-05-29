import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";
import MyForm from "./form";
import Formulaire from "./forms";


export default function Demande() {
    return (
      <>
        <Navbar transparent />
        <main>
        
        </main>
        <Formulaire />
        <br />
        <br />
        <Footer />
    </>
  );
}

