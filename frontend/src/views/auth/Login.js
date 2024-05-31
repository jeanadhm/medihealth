import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/patient/login/", {
        email,
        mdp: password,
      });
      
      history.push("/login");
    } catch (error) {
      setError("Adresse e-mail ou mot de passe incorrect");
    }
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800" >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4"style={{marginTop:'300px'}}>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <form onSubmit={handleSubmit} >
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Adresse e-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleEmailChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Adresse e-mail"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="password"
                        >
                          Mot de passe
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={handlePasswordChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Mot de passe"
                        />
                      </div>
                      {error && <p className="text-red-500">{error}</p>}
                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Annuler
                        </button>
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Connexion
                        </button>
                      </div>
                      <div className="text-center mt-4">
                        <p className="text-blueGray-600">
                          Vous n'êtes pas inscrit ?{" "}
                          <Link
                            to="/Inscription"
                            className="text-blue-500 hover:text-blue-800"
                          >
                            Faites-le ici
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
