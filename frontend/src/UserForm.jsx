import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    identificacion: '',
    nombreUsuario: '',
    apellidos: '',
    nombres: '',
    fechaNacimiento: '',
    celular: '',
    telefono: '',
    correo: '',
    estadoCivil: '',
    sexo: '',
    direccion: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    const phonePattern = /^[0-9]{9}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.identificacion) newErrors.identificacion = 'La identificación es obligatoria';
    if (!formData.nombreUsuario) newErrors.nombreUsuario = 'El nombre de usuario es obligatorio';
    if (!formData.apellidos) newErrors.apellidos = 'Los apellidos son obligatorios';
    if (!formData.nombres) newErrors.nombres = 'Los nombres son obligatorios';
    if (!formData.fechaNacimiento) newErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria';
    if (!formData.celular.match(phonePattern)) newErrors.celular = 'El celular debe tener 9 dígitos';
    if (!formData.telefono.match(phonePattern)) newErrors.telefono = 'El teléfono debe tener 9 dígitos';
    if (!formData.correo.match(emailPattern)) newErrors.correo = 'El correo electrónico no es válido';
    if (!formData.estadoCivil) newErrors.estadoCivil = 'El estado civil es obligatorio';
    if (!formData.sexo) newErrors.sexo = 'El sexo es obligatorio';
    if (!formData.direccion) newErrors.direccion = 'La dirección es obligatoria';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Formulario enviado', formData);

      // Mostrar mensaje de éxito
      setSuccessMessage('Formulario enviado exitosamente');

      // Limpiar campos
      setFormData({
        identificacion: '',
        nombreUsuario: '',
        apellidos: '',
        nombres: '',
        fechaNacimiento: '',
        celular: '',
        telefono: '',
        correo: '',
        estadoCivil: '',
        sexo: '',
        direccion: ''
      });

      // Limpiar errores
      setErrors({});

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } else {
      console.log('Errores en el formulario');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mt-4 px-5">
      <h2 className="mb-4 text-center">Formulario de Registro</h2>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        {/* Campos individuales */}
        <div className="mb-3">
          <label htmlFor="identificacion" className="form-label">Identificación</label>
          <input
            type="text"
            className="form-control"
            id="identificacion"
            name="identificacion"
            value={formData.identificacion}
            onChange={handleChange}
          />
          {errors.identificacion && <div className="text-danger mt-1">{errors.identificacion}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="nombreUsuario" className="form-label">Nombre de Usuario</label>
          <input
            type="text"
            className="form-control"
            id="nombreUsuario"
            name="nombreUsuario"
            value={formData.nombreUsuario}
            onChange={handleChange}
          />
          {errors.nombreUsuario && <div className="text-danger mt-1">{errors.nombreUsuario}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">Apellidos</label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />
          {errors.apellidos && <div className="text-danger mt-1">{errors.apellidos}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="nombres" className="form-label">Nombres</label>
          <input
            type="text"
            className="form-control"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
          />
          {errors.nombres && <div className="text-danger mt-1">{errors.nombres}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
          <input
            type="date"
            className="form-control"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
          />
          {errors.fechaNacimiento && <div className="text-danger mt-1">{errors.fechaNacimiento}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="celular" className="form-label">Celular</label>
          <input
            type="text"
            className="form-control"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
          />
          {errors.celular && <div className="text-danger mt-1">{errors.celular}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          {errors.telefono && <div className="text-danger mt-1">{errors.telefono}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {errors.correo && <div className="text-danger mt-1">{errors.correo}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="estadoCivil" className="form-label">Estado Civil</label>
          <select
            className="form-select"
            id="estadoCivil"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
          {errors.estadoCivil && <div className="text-danger mt-1">{errors.estadoCivil}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="sexo" className="form-label">Sexo</label>
          <select
            className="form-select"
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
          {errors.sexo && <div className="text-danger mt-1">{errors.sexo}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
          {errors.direccion && <div className="text-danger mt-1">{errors.direccion}</div>}
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
