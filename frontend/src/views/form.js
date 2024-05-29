import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    montantDemande: '',
    projetDescription: '',
    documents: ''
  });

  const [pays, setPays] = useState([]);

  useEffect(() => {
    // Récupérer la liste des pays depuis l'API
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setPays(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des pays:', error);
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
    console.log(formData);
    // Envoyer les données du formulaire à votre backend ou effectuer d'autres actions ici
  };

  return (
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
          <label htmlFor="projetDescription">Description du projet:</label>
          <textarea
            id="projetDescription"
            name="projetDescription"
            value={formData.projetDescription}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
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
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button type="button" style={{ width: '48%', padding: '0.5rem', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}>Annuler</button>
        <button type="submit" style={{ width: '48%', padding: '0.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Envoyer</button>
      </div>
    </form>
  );
};

export default MyForm;
