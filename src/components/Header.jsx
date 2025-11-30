import { use, useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  const [user, setUser] = useState(false)

  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/AboutUs">Nosotros</Link>
        <Link to="/Store">Tienda</Link>
        {!user && <>
          <Link to="/login">Iniciar Sesion</Link>
          <Link to="/register">Registrarse</Link>
        </>
        }
      </nav>
    </header>
  )
}