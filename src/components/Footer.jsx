import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        <div className="footer-brand">
          <img
            src="/logoclub2.webp"
            alt="Escudo Club Belgrano"
            className="footer-logo"
          />
          <span className="footer-club-name">Club Atlético Belgrano</span>
          <address className="footer-address">
            Rivadavia 123<br />
            Gral. Belgrano, Provincia de Buenos Aires<br />
            Tel: 02243 45-2202
          </address>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><Link to="/" className="footer-link">Inicio</Link></li>
            <li><Link to="/historia" className="footer-link">Historia</Link></li>
            <li><Link to="/authorities" className="footer-link">Comisión Directiva</Link></li>
            <li><Link to="/contact" className="footer-link">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Socios</h3>
          <ul>
            <li><Link to="/store" className="footer-link">Tienda Oficial</Link></li>
            <li><Link to="/membership" className="footer-link">Hazte Socio</Link></li>
            <li><Link to="/activities" className="footer-link">Actividades</Link></li>
            <li><Link to="/portal" className="footer-link">Portal del Socio</Link></li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="footer-links">
          <h3>Seguinos</h3>
          <p >
            Todas las novedades al instante en nuestras redes oficiales.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/clubbelgrano/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/ClubBelgranoOficial/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

      </div>

      {/* Barra inferior de Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Club Atlético y Social General Belgrano. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}