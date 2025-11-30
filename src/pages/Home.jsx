import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';


const Home = () => {
  return (
    <Layout className="home-container">

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">CLUB ATLÉTICO [NOMBRE]</h1>
          <p className="hero-slogan">"Mi club, tu club"</p>
          <button className="cta-button">Hazte Socio</button>
        </div>
      </header>

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
        <Link to="/sobre-nosotros" className="grid-card">
          <h3 className="card-title">Institucional</h3>
          <p>Conoce a nuestra comisión y valores.</p>
        </Link>

        <Link to="/store" className="grid-card">
          <h3 className="card-title">Tienda Oficial</h3>
          <p>Lleva los colores del club contigo.</p>
        </Link>

        <Link to="/activities" className="grid-card">
          <h3 className="card-title">Actividades</h3>
          <p>Fútbol, Basket, Tenis y más.</p>
        </Link>
      </section>

    </Layout>
  );
};

export default Home;