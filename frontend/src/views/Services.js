import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";

export default function Services() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Carousel />
      </main>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Nos Services
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "calc(50% - 10px)",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "15px", fontSize: "16px" }}>
              <strong style={{ color: "#007bff" }}>
                Collecte de fonds pour des causes humanitaires :
              </strong>{" "}
              Nous offrons une plateforme où vous pouvez collecter des fonds
              pour soutenir des causes humanitaires telles que l'aide aux
              réfugiés, la lutte contre la pauvreté, etc.
            </div>
          </div>
          <div
            style={{
              width: "calc(50% - 10px)",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "15px", fontSize: "16px" }}>
              <strong style={{ color: "#007bff" }}>
                Financement de projets artistiques et culturels :
              </strong>{" "}
              Vous pouvez financer des projets artistiques tels que des films,
              des livres, des expositions, etc., et soutenir les artistes dans
              la réalisation de leurs créations.
            </div>
          </div>
          <div
            style={{
              width: "calc(50% - 10px)",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "15px", fontSize: "16px" }}>
              <strong style={{ color: "#007bff" }}>
                Soutien aux entrepreneurs et startups :
              </strong>{" "}
              Nous aidons les entrepreneurs à financer leurs projets commerciaux
              et startups pour les aider à démarrer ou à développer leur
              entreprise.
            </div>
          </div>
          <div
            style={{
              width: "calc(50% - 10px)",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "15px", fontSize: "16px" }}>
              <strong style={{ color: "#007bff" }}>
                Financement de projets environnementaux :
              </strong>{" "}
              Contribuez à des projets visant à protéger l'environnement, à
              promouvoir le développement durable et à lutter contre le
              changement climatique.
            </div>
          </div>
          <div
            style={{
              width: "calc(50% - 10px)",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "15px", fontSize: "16px" }}>
              <strong style={{ color: "#007bff" }}>
                Aide aux personnes dans le besoin :
              </strong>{" "}
              Nous collectons des fonds pour aider les personnes confrontées à
              des difficultés financières, médicales, sociales, etc.
            </div>
          </div>
          <div
            style={{
              width: "calc(50% - 10px)",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "15px", fontSize: "16px" }}>
              <strong style={{ color: "#007bff" }}>
                Financement de la recherche et de l'innovation :
              </strong>{" "}
              Soutenez la recherche scientifique, médicale ou technologique en
              contribuant à des projets de recherche et d'innovation.
            </div>
          </div>
          <div
            style={{
              width: "calc(50% - 10px)",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "15px", fontSize: "16px" }}>
              <strong style={{ color: "#007bff" }}>
                Soutien aux initiatives communautaires :
              </strong>{" "}
              Contribuez à des projets et initiatives communautaires visant à
              améliorer la qualité de vie dans les quartiers et à promouvoir la
              cohésion sociale.
            </div>
          </div>
          <div
            style={{
              width: "calc(50% - 10px)",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "15px", fontSize: "16px" }}>
              <strong style={{ color: "#007bff" }}>
                Financement de programmes éducatifs et de bourses d'études :
              </strong>{" "}
              Aidez à financer des programmes éducatifs et des bourses d'études
              pour soutenir l'accès à l'éducation pour tous.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
