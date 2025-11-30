import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Store from "../pages/Store"
import NotFound from "../pages/NotFound"


const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<AboutUs />} />
        <Route path="/administracion" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }