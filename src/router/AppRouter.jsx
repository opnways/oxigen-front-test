import { Navigate, Routes, Route } from "react-router-dom"

import { Header } from "../components/header/Header"
import { ProductPage } from "../pages/ProductPage"
import { HomePage } from "../pages/HomePage"


export const AppRouter = () => {
  return (   
    <>
    <Header />
    <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}
