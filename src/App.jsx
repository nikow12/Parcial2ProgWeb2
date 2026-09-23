import React, { useState } from 'react';
import Encabezado from './components/Encabezado';
import FormularioEquipo from './components/FormularioEquipo';
import Equipo from './components/Equipo';

function App() {
  const [equipos, setEquipos] = useState([]);
  const agregarEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, nuevoEquipo]);
  };

  return (
    <div className="container py-4">
      <Encabezado 
        titulo="Inventario Tecnológico" 
        subtitulo="Control de equipos disponibles" 
      />
      
      <div className="row mt-4">
        <div className="col-lg-4 mb-4">
          <FormularioEquipo agregarEquipo={agregarEquipo} />
        </div>
        
        <div className="col-lg-8">
          <h3 className="mb-3">Equipos Registrados</h3>
          
          {/* Renderizado condicional: si no hay equipos o si existe la lista */}
          {equipos.length === 0 ? (
            <div className="alert alert-info">No existen equipos registrados.</div>
          ) : (
            <div className="row">
              {equipos.map((equipo, index) => (
                <Equipo key={index} equipo={equipo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;