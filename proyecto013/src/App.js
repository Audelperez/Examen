import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState('');
  const [decimal, setDecimal] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (numero === '') {
      setDecimal(0);
      setIsValid(true);
      return;
    }

    // Validación binaria
    const esBinario = /^[01]+$/.test(numero);
    setIsValid(esBinario);

    if (esBinario) {
      // Conversión a decimal
      setDecimal(parseInt(numero, 2));
    }
  }, [numero]);

  const cambioNumero = (event) => {
    setNumero(event.target.value);
    setShowResult(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="app-container">
      <div className="validator-card">
        <h2 className="title">Validador Binario</h2>
        <p className="subtitle">Ingresa un número binario para validar y convertir a decimal</p>
        
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label className="input-label">Número binario:</label>
            <input
              type="text"
              value={numero}
              onChange={cambioNumero}
              className={`binary-input ${!isValid && numero !== '' ? 'invalid' : ''}`}
              placeholder="Ej: 101010"
              maxLength="8"
            />
            {!isValid && numero !== '' && (
              <p className="error-message">Solo se permiten 0 y 1</p>
            )}
          </div>
          
          <button 
            type="submit" 
            className="validate-btn"
            disabled={!isValid || numero === ''}
          >
            Validar y Convertir
          </button>
        </form>

        {showResult && isValid && numero !== '' && (
          <div className="result-container">
            <h3 className="result-title">Resultado</h3>
            <div className="result-grid">
              <div className="result-item">
                <span className="result-label">Binario:</span>
                <span className="result-value">{numero}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Decimal:</span>
                <span className="result-value">{decimal}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;