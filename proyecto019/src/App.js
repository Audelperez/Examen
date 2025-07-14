import { useState } from 'react';
import argentina from './imagenes/argentina.png';
import bolivia from './imagenes/bolivia.png';
import brasil from './imagenes/brasil.png';
import chile from './imagenes/chile.png';
import colombia from './imagenes/colombia.png';
import peru from './imagenes/peru.png';
import uruguay from './imagenes/uruguay.png';
import venezuela from './imagenes/venezuela.png';

function App() {
  const banderas = [
    argentina,
    bolivia,
    brasil,
    chile,
    colombia,
    peru,
    uruguay,
    venezuela
  ];

  const [nroBandera, setNroBandera] = useState(0);

  function banderaSiguiente() {
    if (nroBandera < banderas.length - 1) {
      setNroBandera(nroBandera + 1);
    }
  }

  function banderaPrevia() {
    if (nroBandera > 0) {
      setNroBandera(nroBandera - 1);
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Banderas de países latinoamericanos</h1>
      <img
        src={banderas[nroBandera]}
        alt="bandera"
        style={{ width: '200px', height: 'auto' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={banderaPrevia} disabled={nroBandera === 0}>
          &lt;
        </button>
        <button onClick={banderaSiguiente} disabled={nroBandera === banderas.length - 1}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default App;


