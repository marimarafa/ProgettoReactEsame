import React, { useState, useEffect } from 'react';
import './stile.css';

function Progetto() {
  const [progettoData, setProgettoData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5004/progetto') // La tua API Flask per progetto
      .then(response => response.json())
      .then(data => setProgettoData(data))
      .catch(error => console.error('Errore nel recupero dei dati: ', error));
  }, []);

  return (
    <div>
      <h2>Elenco Progetti</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome Progetto</th>
            <th>Data Inizio</th>
            <th>Data Fine</th>
            <th>Stato</th>
          </tr>
        </thead>
        <tbody>
          {progettoData.map((progetto, index) => (
            <tr key={index}>
              <td>{progetto.id}</td>
              <td>{progetto.nome}</td>
              <td>{progetto.data_inizio}</td>
              <td>{progetto.data_fine}</td>
              <td>{progetto.stato}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Progetto;
