import { useState } from 'react';
import './App.css';

function App() {
  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    estudios: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatos(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const procesar = (e) => {
    e.preventDefault();
    alert(
      `Datos enviados:\nNombre: ${datos.nombre}\nEdad: ${datos.edad}\nEstudios: ${datos.estudios ? 'Sí' : 'No'}`
    );
  };

  return (
    <div className="app-container">
      <div className="form-card">
        <h2 className="form-title">Formulario de Registro</h2>
        
        <form onSubmit={procesar} className="form">
          <div className="form-group">
            <label className="form-label">Nombre completo:</label>
            <input
              type="text"
              name="nombre"
              value={datos.nombre}
              onChange={handleChange}
              className="form-input"
              placeholder="Ej: María González"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Edad:</label>
            <input
              type="number"
              name="edad"
              value={datos.edad}
              onChange={handleChange}
              className="form-input"
              placeholder="Ej: 25"
              min="1"
              max="120"
              required
            />
          </div>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="estudios"
                checked={datos.estudios}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              ¿Tiene estudios superiores?
            </label>
          </div>
          
          <button type="submit" className="submit-btn">
            Enviar Datos
          </button>
        </form>

        <div className="data-preview">
          <h3 className="preview-title">Resumen de datos</h3>
          <div className="preview-item">
            <span className="preview-label">Nombre:</span>
            <span className="preview-value">{datos.nombre || 'No especificado'}</span>
          </div>
          <div className="preview-item">
            <span className="preview-label">Edad:</span>
            <span className="preview-value">{datos.edad || 'No especificada'}</span>
          </div>
          <div className="preview-item">
            <span className="preview-label">Estudios:</span>
            <span className="preview-value">
              {datos.estudios ? 'Con estudios' : 'Sin estudios'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;