import React from 'react';

function ListadoResultados(props) {
  return (
    <div>
      <h3>Historial de operaciones</h3>
      <ul>
        {props.resultados.map((item, index) => (
          <li key={index}>
            {item.valor1} + {item.valor2} = {item.resultado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoResultados;
