import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout