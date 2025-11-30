import { use, useState } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"

export const Header = () => {
  const [user, setUser] = useState(false)
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="belgrano-style-header">

      <div className="header-main-bar">
        <div className="main-bar-container">

          <Link to="/" className="header-brand">
            <img
              src="/logoclub.webp"
              alt="Escudo Belgrano"
              className="header-logo"
            />
          </Link>

          <button className="mobile-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`main-nav ${menuActive ? 'active' : ''}`}>
            <ul className="nav-list">

              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setMenuActive(false)}>Inicio</Link>
              </li>

              <li className="nav-item">
                <Link to="/historia" className="nav-link" onClick={() => setMenuActive(false)}>Historia</Link>
              </li>

              <li className="nav-item">
                <Link to="/store" className="nav-link" onClick={() => setMenuActive(false)}>Tienda</Link>
              </li>

              {!user && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" onClick={() => setMenuActive(false)}>Iniciar Sesión</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/registro" className="nav-link highlight-register" onClick={() => setMenuActive(false)}>
                      Registrarse
                    </Link>
                  </li>
                </>
              )}

            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/store" className="shop-button">
              <span className="cart-icon"><FaShoppingCart /></span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  )
}