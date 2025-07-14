import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [texto, setTexto] = useState('');

  function cambiar(e) {
    setTexto(e.target.value);
  }

  useEffect(() => {
    document.title = texto || "Actualizar título";
  }, [texto]);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Actualizador de Título</h1>
        <p className="subtitle">Lo que escribas se verá en la pestaña del navegador</p>
        
        <div className="input-container">
          <input 
            type="text" 
            value={texto} 
            onChange={cambiar} 
            className="text-input"
            placeholder="Escribe algo aquí..."
          />
          <span className="input-icon">✏️</span>
        </div>
        
        <div className="preview">
          <p className="preview-label">Vista previa del título:</p>
          <p className="preview-text">{texto || "..."}</p>
        </div>
      </div>
    </div>
  );
}

export default App;