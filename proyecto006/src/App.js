import React, { useState } from 'react';
import Dado from './Dado';
import './App.css';

function App() {
  const [numeros, setNumeros] = useState([
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ]);

  function tirar() {
    setNumeros([
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ]);
  }

  return (
    <div className="App">
      <h1>Juego de Dados</h1>
      <div className="dados-container">
        {numeros.map((numero, index) => (
          <Dado key={index} valor={numero} />
        ))}
      </div>
      <button className="tirar-btn" onClick={tirar}>Tirar Dados</button>
    </div>
  );
}

export default App;