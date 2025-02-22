import React, { useState, useEffect } from 'react';

function Esame() {
  const [esami, setEsamiData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5004/esame') // La tua API Flask per esami
      .then(response => response.json())
      .then(data => setEsamiData(data))
      .catch(error => console.error('Errore nel recupero dei dati: ', error));
  }, []);

  return (
    <div>
      <h2>Elenco Esami</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Studente</th>
            <th>Data</th>
            <th>Materia</th>
          </tr>
        </thead>
        <tbody>
          {esami.map((esame, index) => (
            <tr key={index}>
              <td>{esame.id}</td>
              <td>{esame.studente}</td>
              <td>{esame.data}</td>
              <td>{esame.materia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Esame;