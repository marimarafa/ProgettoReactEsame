import React, { useState, useEffect } from 'react';

function Assenza() {
  const [assenzaData, setAssenzaData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5004/assenza') // La tua API Flask per assenza
      .then(response => response.json())
      .then(data => setAssenzaData(data))
      .catch(error => console.error('Errore nel recupero dei dati: ', error));
  }, []);

  return (
    <div>
      <h2>Elenco Assenze</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Studente</th>
            <th>Data</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          {assenzaData.map((assenza, index) => (
            <tr key={index}>
              <td>{assenza.id}</td>
              <td>{assenza.studente_id}</td>
              <td>{assenza.data}</td>
              <td>{assenza.motivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assenza;
