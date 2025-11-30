import React, { useState } from 'react';
import Layout from '../layout/Layout';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de login:', formData);
    // Acá iría tu lógica de conexión con Supabase o el back que uses
  };

  return (
    <Layout >
     <div className="login-page"> {/* Capa oscura para que resalte el formulario */}
      <div className="login-overlay"></div>
      
      <div className="login-container">
        <div className="login-card">
          
          <div className="section-header">
            <h2 className="section-title">Iniciá Sesión</h2>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
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

            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" /> Recordarme
              </label>
              <a href="/recuperar" className="forgot-password">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="btn-login">
              Ingresar
            </button>
          </form>

          <div className="login-footer">
            <p>¿No sos socio todavía? <a href="/registrarse">Hacete socio acá</a></p>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Login;