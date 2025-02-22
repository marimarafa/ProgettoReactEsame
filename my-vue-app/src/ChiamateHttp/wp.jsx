import React, { useState, useEffect } from 'react';

function Wp() {
  const [wpData, setWpData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5004/wp') // La tua API Flask per wp
      .then(response => response.json())
      .then(data => setWpData(data))
      .catch(error => console.error('Errore nel recupero dei dati: ', error));
  }, []);

  return (
    <div>
      <h2>Elenco WP</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrizione</th>
            <th>Data Inizio</th>
            <th>Data Fine</th>
            <th>Ore</th>
          </tr>
        </thead>
        <tbody>
          {wpData.map((wp, index) => (
            <tr key={index}>
              <td>{wp.id}</td>
              <td>{wp.nome}</td>
              <td>{wp.descrizione}</td>
              <td>{wp.data_inizio}</td>
              <td>{wp.data_fine}</td>
              <td>{wp.ore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Wp;
