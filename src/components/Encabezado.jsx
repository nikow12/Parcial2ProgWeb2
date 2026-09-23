import React from 'react';

const Encabezado = ({ titulo, subtitulo }) => {
  return (
    <div className="text-center bg-primary text-white p-4 mb-4 rounded">
      <h1>{titulo}</h1>
      <p className="lead mb-0">{subtitulo}</p>
    </div>
  );
};

export default Encabezado;