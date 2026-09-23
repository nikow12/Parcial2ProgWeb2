import React, { useState } from 'react';

const FormularioEquipo = ({ agregarEquipo }) => {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [estado, setEstado] = useState(true);

  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones solicitadas
    if (
      !nombre.trim() || 
      !marca.trim() || 
      !categoria || 
      Number(precio) <= 0 || 
      Number(stock) < 0 || 
      stock === ''
    ) {
      setError(true);
      setExito(false);
      return;
    }

    // Si pasa las validaciones
    setError(false);
    setExito(true);

    agregarEquipo({
      nombre,
      marca,
      categoria,
      precio: Number(precio),
      stock: Number(stock),
      estado
    });

    // Limpiar campos
    setNombre('');
    setMarca('');
    setCategoria('');
    setPrecio('');
    setStock('');
    setEstado(true);

    // Ocultar mensaje de éxito tras 3 segundos
    setTimeout(() => setExito(false), 3000);
  };

  return (
    <div className="card shadow-sm p-4">
      <h4 className="mb-3">Registrar Nuevo Equipo</h4>
      
      {/* Renderizado condicional de mensajes */}
      {error && <div className="alert alert-danger">Complete correctamente los campos obligatorios.</div>}
      {exito && <div className="alert alert-success">Equipo registrado correctamente.</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input type="text" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <select className="form-select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Seleccione una categoría...</option>
            <option value="Laptop">Laptop</option>
            <option value="Monitor">Monitor</option>
            <option value="Periférico">Periférico</option>
            <option value="Impresora">Impresora</option>
            <option value="Red">Red</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <label className="form-label">Precio ($)</label>
            <input type="number" step="0.01" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
          </div>
          <div className="col-6">
            <label className="form-label">Stock</label>
            <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} />
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="estadoCheck" checked={estado} onChange={(e) => setEstado(e.target.checked)} />
          <label className="form-check-label" htmlFor="estadoCheck">Equipo Disponible</label>
        </div>
        <button type="submit" className="btn btn-primary w-100">Registrar equipo</button>
      </form>
    </div>
  );
};

export default FormularioEquipo;