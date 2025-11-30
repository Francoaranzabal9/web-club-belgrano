import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';


const Home = () => {
  return (
    <Layout className="home-container">

      {/* Hero Section */}
      <section className="hero-belgrano-style">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-club-name">CLUB ATLÉTICO y SOCIAL GENERAL BELGRANO</span>
          <h1 className="hero-slogan-big">MI CLUB,<br />TU CLUB.</h1>
        </div>
      </section>

      {/* Sección de Historia */}
      <section className="history-section">
        <h2 className="section-title">Nuestra Historia</h2>
        <p className="history-text">
          Fundado con pasión y esfuerzo, nuestro club ha sido el hogar de generaciones
          de deportistas desde sus inicios. Más que un lugar para entrenar, somos una
          familia que comparte valores, victorias y aprendizajes. Aquí es donde nacen
          las amistades para toda la vida y donde el espíritu deportivo cobra vida.
        </p>
      </section>

      {/* Grid Links a otras secciones */}
      <section className="navigation-grid">
        <Link to="/about" className="grid-card">

          <h3 className="card-title">Institucional</h3>
          <p>Conoce a nuestra comisión y valores.</p>
        </Link>

        <Link to="/activities" className="grid-card">

          <h3 className="card-title">Actividades</h3>
          <p>Fútbol, Basket, Tenis y más.</p>
        </Link>
      </section>

      {/* Store Banner */}
      <section className="store-banner-section">
        <div className="store-banner-text">
          <h2>Lleva los colores</h2>
          <p>Descubre la nueva indumentaria oficial y accesorios.</p>
        </div>
        <Link to="/store" className="btn-store-outline">
          Visitar Tienda Oficial
        </Link>
      </section>

      {/* Social Media Grid */}
      <section className="social-section">
        <div className="section-header">
          <h2 className="section-title">El Club en Redes</h2>
          <p>Sigue el día a día de nuestra comunidad.</p>
        </div>
      </section>

    </Layout>
  );
};

export default Home;