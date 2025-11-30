import React, { useState } from 'react';
import Layout from '../layout/Layout';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden, chequealo.");
      return;
    }
    console.log('Datos de registro:', formData);
    // Acá iría la lógica para crear el usuario en Supabase
  };

  return (
    <Layout>
      <div className="login-page">
      {/* El overlay oscuro */}
      <div className="login-overlay"></div>
      
      <div className="login-container">
        <div className="login-card">
          
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2 className="section-title">Hacete Socio</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>
              Unite a la familia del Club General Belgrano.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form" style={{ marginTop: '1rem' }}>
            
            {/* Campo Nombre Completo */}
            <div className="input-group">
              <label htmlFor="fullName">Nombre Completo</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName"
                placeholder="Tu nombre completo.."
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Campo Email */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="ejemplo@clubbelgrano.com"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Campos de Contraseña (podrías ponerlos en grid si querés, acá van uno abajo del otro) */}
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="Mínimo 8 caracteres"
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>


            <button type="submit" className="btn-login">
              Registrarse
            </button>
          </form>

          <div className="login-footer">
            <p>¿Ya tenés cuenta? <a href="/iniciar-sesion">Iniciá sesión acá</a></p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Register;