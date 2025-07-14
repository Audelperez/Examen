import React from 'react';
import './Dado.css';

function Dado({ valor }) {
  return (
    <div className="dado">
      {valor}
    </div>
  );
}

export default Dado;