import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";

export default function About() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Carousel />
        <section>
          <div className="bg-white py-10 flex justify-center">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-5xl font-bold mb-8 animate-bounce">A propos</h2>
              <p className="text-lg text-blueGray-500 leading-relaxed max-w-2xl mx-auto animate-fade-in">
                Unpaidfinance est votre partenaire de confiance pour une gestion financière efficace et responsable. Que vous nécessitiez des recommandations sur l'épargne, l'investissement ou la gestion de vos dettes, notre équipe d'experts est là pour vous accompagner à chaque étape. Nous savons que la gestion de l'argent peut être source de stress et de complexité, c'est pourquoi nous vous offrons les outils et ressources requis pour vous guider vers des décisions financières judicieuses. Que vous soyez un étudiant économisant pour votre formation, un professionnel commençant cherchant à investir pour le futur, ou un retraité préparant sa retraite, Unpaidfinance est disponible pour vous assister dans la réalisation de vos objectifs financiers. N'hésitez plus à gérer vos finances et à bâtir un avenir financier solide. Rejoignez la communauté Unpaidfinance aujourd'hui et laissez-nous vous guider vers le succès financier.
              </p>
              <p className="text-lg text-blueGray-500 leading-relaxed max-w-2xl mx-auto mt-8 animate-fade-in">
                De plus, chez Unpaidfinance, nous croyons fermement en l'accessibilité financière pour tous. C'est pourquoi nous offrons également des services de financement sans remboursement, permettant à nos clients de bénéficier de l'assistance financière dont ils ont besoin sans avoir à se soucier de rembourser le montant emprunté. Notre objectif est de soutenir nos clients dans leurs besoins financiers tout en leur offrant la tranquillité d'esprit nécessaire pour se concentrer sur leurs objectifs. Découvrez dès maintenant nos options de financement sans remboursement et laissez Unpaidfinance vous accompagner vers un avenir financier sécurisé et prospère.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
