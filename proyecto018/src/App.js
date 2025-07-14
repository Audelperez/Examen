import React, { useState } from 'react';

function App() {
  const banderasPaises = [
    'argentina.png',
    'bolivia.png',
    'brasil.png',
    'chile.png',
    'colombia.png',
    'peru.png',
    'uruguay.png',
    'venezuela.png'
  ];

  const [banderaSeleccionada, setBanderaSeleccionada] = useState(0);

  function banderaSiguiente() {
    if (banderaSeleccionada < banderasPaises.length - 1) {
      setBanderaSeleccionada(banderaSeleccionada + 1);
    }
  }

  function banderaPrevia() {
    if (banderaSeleccionada > 0) {
      setBanderaSeleccionada(banderaSeleccionada - 1);
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Banderas de países latinoamericanos</h1>
      <p>
        <img
          src={process.env.PUBLIC_URL + '/imagenes/' + banderasPaises[banderaSeleccionada]}
          alt="bandera"
          style={{ width: '200px', height: 'auto' }}
        />
      </p>
      <p>
        <button onClick={banderaPrevia} disabled={banderaSeleccionada === 0}>&lt;</button>
        <button onClick={banderaSiguiente} disabled={banderaSeleccionada === banderasPaises.length - 1}>&gt;</button>
      </p>
      <p>{banderasPaises[banderaSeleccionada]}</p>
    </div>
  );
}

export default App;

