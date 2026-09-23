import React from 'react';

const Equipo = ({ equipo }) => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title fw-bold">{equipo.nombre}</h5>
          <h6 className="card-subtitle mb-3 text-muted">{equipo.marca} | {equipo.categoria}</h6>
          <p className="mb-1"><strong>Precio:</strong> ${equipo.precio}</p>
          <p className="mb-1"><strong>Stock:</strong> {equipo.stock} unidades</p>
          <p className="mb-0">
            <strong>Estado: </strong> 
            {/* Renderizado condicional del estado */}
            <span className={`badge ${equipo.estado ? 'bg-success' : 'bg-danger'}`}>
              {equipo.estado ? 'Disponible' : 'No disponible'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Equipo;