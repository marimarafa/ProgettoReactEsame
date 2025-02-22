import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Stile importato come nel tuo esempio

// Importa l'immagine del logo
import logo from './academy.png';

function HomePage() {
  return (
    <div className="home-container">
      {/* Logo posizionato in alto a destra */}
      <img src={logo} alt="Logo" className="home-logo" />

      <header className="home-header">
        <h1>Inizia a visualizzare e gestire le tue tabelle.</h1>
        <p>Esplora le funzionalità disponibili nel sistema!</p>
      </header>

      <section className="home-content">
        <div className="home-card">
          <h2>Elenco WP</h2>
          <p>Visualizza la lista di tutti i WP</p>
          <Link to="/wp" className="home-link">Vai a WP</Link>
        </div>

        <div className="home-card">
          <h2>Elenco Assenze</h2>
          <p>Controlla le assenze registrate</p>
          <Link to="/assenza" className="home-link">Vai alle Assenze</Link>
        </div>

        {/* Aggiungiamo altre tabelle */}
        <div className="home-card">
          <h2>Elenco Progetti</h2>
          <p>Visualizza i progetti in corso</p>
          <Link to="/progetto" className="home-link">Vai ai Progetti</Link>
        </div>

        <div className="home-card">
          <h2>Elenco Docenti</h2>
          <p>Visualizza i docenti del sistema</p>
          <Link to="/docente" className="home-link">Vai ai Docenti</Link>
        </div>

        <div className="home-card">
          <h2>Elenco Corsi</h2>
          <p>Visualizza i corsi disponibili</p>
          <Link to="/corso" className="home-link">Vai ai Corsi</Link>
        </div>

        <div className="home-card">
          <h2>Elenco Studenti</h2>
          <p>Visualizza i studenti del sistema</p>
          <Link to="/studente" className="home-link">Vai ai Studenti</Link>
        </div>

        <div className="home-card">
          <h2>Elenco Esami</h2>
          <p>Controlla gli esami sostenuti dagli studenti</p>
          <Link to="/esame" className="home-link">Vai agli Esami</Link>
        </div>
      </section>

 
      <footer className="home-footer">
        <p>&copy; 2025 Sistema di Gestione. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

export default HomePage;
