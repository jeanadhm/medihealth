import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import du hook useHistory
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from "./carrousel";

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    montantDemande: '',
    projetDescription: '',
    pays: '',
    idcard: '',
    homeproof: '',
    devise: '',
    username: '', // Ajout des champs username et mdp
    mdp: ''
  });

  const [pays, setPays] = useState([]);
  const [devises, setDevises] = useState([]);
  const history = useHistory(); // Initialisation du hook useHistory

  useEffect(() => {
    // Récupérer la liste des pays depuis l'API
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setPays(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des pays:', error);
      });

    // Récupérer la liste des devises depuis l'API des taux de change (Open Exchange Rates)
    axios.get('https://openexchangerates.org/api/currencies.json')
      .then(response => {
        setDevises(Object.keys(response.data));
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des devises:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/demande', formData)
         .then(response => {
             console.log(response.data);
             // Réinitialiser le formulaire après l'envoi réussi
             setFormData({
                 nom: '',
                 prenom: '',
                 email: '',
                 telephone: '',
                 montantDemande: '',
                 projetDescription: '',
                 pays: '',
                 idcard: '',
                 homeproof: '',
                 devise: '',
                 username: '', // Réinitialisation des champs username et mdp
                 mdp: ''
             });
             history.push('/login');
         })
         .catch(error => {
             console.error('Erreur lors de l\'envoi de la demande:', error);
         });
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <Carousel />
        <br /><br /><br /><br /><br /><br /><br />
        <section className="pb-20 relative block bg-blueGray-800">
          <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-8/12 px-4"> {/* Ajustement de la largeur du cadre ici */}
              <br /><br /><br /><br /><br /><br /><br />
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: 'auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="nom">Nom:</label>
                          <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="prenom">Prénom:</label>
                          <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="email">Email:</label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="username">Nom d'utilisateur:</label>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="mdp">Mot de passe:</label>
                          <input
                            type="text"
                            id="mdp"
                            name="mdp"
                            value={formData.mdp}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>

                        <div style={{ width: '48%' }}>
                          <label htmlFor="telephone">Téléphone:</label>
                          <input
                            type="text"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="montantDemande">Montant de la demande:</label>
                          <input
                            type="number"
                            id="montantDemande"
                            name="montantDemande"
                            value={formData.montantDemande}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="devise">Devise:</label>
                          <select
                            id="devise"
                            name="devise"
                            value={formData.devise}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          >
                            <option value="">Choisissez une devise...</option>
                            {devises.map(devise => (
                              <option key={devise} value={devise}>{devise}</option>
                            ))}
                          </select>
                        </div>
                        
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="pays">Pays:</label>
                          <select
                            id="pays"
                            name="pays"
                            value={formData.pays}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          >
                            <option value="">Choisissez un pays...</option>
                            {pays.map(country => (
                              <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
                            ))}
                          </select>
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="idcard">Pièce d'identité:</label>
                          <input
                            type="file"
                            id="idcard"
                            name="idcard"
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        <div style={{ width: '48%' }}>
                          <label htmlFor="homeproof">Justificatif de domicile:</label>
                          <input
                            type="file"
                            id="homeproof"
                            name="homeproof"
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
                        
                      </div>
                      <div style={{ width: '' }}>
                          <label htmlFor="projetDescription">Description du projet:</label>
                          <textarea
                            id="projetDescription"
                            name="projetDescription"
                            value={formData.projetDescription}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem' }}
                          />
                        </div>
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
                          Envoyer
                        </button>
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
};

export default Formulaire;
