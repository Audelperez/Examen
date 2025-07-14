import React, { useState } from 'react';
import ListadoResultados from './ListadoResultados';
import './App.css';

function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [operaciones, setOperaciones] = useState([]);

  function sumar(e) {
    e.preventDefault();
    if (!valor1 || !valor2) return;
    
    const num1 = parseInt(valor1);
    const num2 = parseInt(valor2);
    const resultado = num1 + num2;
    
    const nuevaOperacion = {
      valor1: num1,
      valor2: num2,
      resultado: resultado
    };
    
    setOperaciones([nuevaOperacion, ...operaciones]);
    setValor1('');
    setValor2('');
  }

  return (
    <div className="app-container">
      <div className="calculator-card">
        <h1 className="app-title">Calculadora de Sumas</h1>
        <form onSubmit={sumar} className="sum-form">
          <div className="input-group">
            <label>Primer número:</label>
            <input 
              type="number" 
              value={valor1} 
              onChange={(e) => setValor1(e.target.value)} 
              placeholder="Ingresa un número"
              className="number-input"
            />
          </div>
          <div className="input-group">
            <label>Segundo número:</label>
            <input 
              type="number" 
              value={valor2} 
              onChange={(e) => setValor2(e.target.value)} 
              placeholder="Ingresa otro número"
              className="number-input"
            />
          </div>
          <button type="submit" className="sum-button">
            Sumar
          </button>
        </form>
      </div>
      <ListadoResultados resultados={operaciones} />
    </div>
  );
}

export default App;